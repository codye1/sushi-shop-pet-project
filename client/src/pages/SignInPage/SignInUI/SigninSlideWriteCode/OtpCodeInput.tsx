import { useMemo, useRef } from 'react';

type Props = {
  fields?: number;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  name?: string;
  inputStyle?: React.CSSProperties;
};

const onlyDigits = (text: string) => text.replace(/\D/g, '');

const OtpCodeInput = ({
  fields = 4,
  value,
  onChange,
  placeholder,
  inputMode,
  name,
  inputStyle,
}: Props) => {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const chars = useMemo(() => {
    const normalized = onlyDigits(String(value || '')).slice(0, fields);
    return Array.from(
      { length: fields },
      (_, index) => normalized[index] ?? ''
    );
  }, [fields, value]);

  const commit = (nextChars: string[]) => {
    onChange(nextChars.join(''));
  };

  const setAtIndex = (index: number, text: string) => {
    const digits = onlyDigits(text);
    if (digits.length === 0) {
      const next = [...chars];
      next[index] = '';
      commit(next);
      return;
    }

    const next = [...chars];
    for (let offset = 0; offset < digits.length; offset += 1) {
      const targetIndex = index + offset;
      if (targetIndex >= fields) break;
      next[targetIndex] = digits[offset];
    }
    commit(next);

    const focusIndex = Math.min(index + digits.length, fields - 1);
    refs.current[focusIndex]?.focus();
    refs.current[focusIndex]?.select();
  };

  return (
    <>
      {Array.from({ length: fields }, (_, index) => (
        <input
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          name={name}
          inputMode={inputMode}
          autoComplete="one-time-code"
          maxLength={fields}
          value={chars[index]}
          placeholder={placeholder}
          style={inputStyle}
          onChange={(e) => setAtIndex(index, e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Backspace') return;
            if (chars[index]) return;
            const prev = Math.max(index - 1, 0);
            refs.current[prev]?.focus();
            const next = [...chars];
            next[prev] = '';
            commit(next);
          }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text');
            setAtIndex(index, text);
          }}
        />
      ))}
    </>
  );
};

export default OtpCodeInput;
