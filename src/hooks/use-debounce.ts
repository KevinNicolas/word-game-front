import { useMemo } from 'react';
import { debounce } from 'throttle-debounce';

export const useDebounce = (fc: (...arg: any) => void, time: number) => {
  const debouncedFc = useMemo(() => debounce(time, fc), []);
  return debouncedFc;
};
