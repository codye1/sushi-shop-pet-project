import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../hooks';

export const useHeader = () => {
  const [isScroled, setScroled] = useState(false);
  const [transform, setStransform] = useState(0);
  const searchActive = useAppSelector(
    (state) => state.searchActive.searchActive
  );

  useEffect(() => {
    const handleScroll = (e: number) => {
      if (window.scrollY > 100) {
        setScroled(true);
        if (e < 0) {
          setStransform(0);
        } else {
          searchActive ? setStransform(-55) : setStransform(-65);
        }
      } else setScroled(false);
    };

    const onScroll = () => {
      if (window.scrollY < 100) {
        setScroled(false);
        setStransform(0);
      }
    };

    const onWheel = (e: WheelEvent) => {
      handleScroll(e.deltaY);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
    };
  }, [searchActive]);

  return { isScroled, transform, searchActive };
};
