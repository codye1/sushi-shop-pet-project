import { FC } from 'react';
import './TwoButtons.css';

interface ITwoButtons {
  onApply: () => void;
  onCancel: () => void;
  cancelTitle: string;
  applyTitle: string;
}

const TwoButtons: FC<ITwoButtons> = ({
  onApply,
  onCancel,
  cancelTitle,
  applyTitle,
}) => {
  return (
    <div className="two-buttons">
      <button onClick={onCancel} className="button-cancel pointer">
        {cancelTitle}
      </button>
      <button onClick={onApply} className="button-apply pointer">
        {applyTitle}
      </button>
    </div>
  );
};

export default TwoButtons;
