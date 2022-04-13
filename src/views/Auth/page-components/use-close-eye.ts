import { useEffect, useState } from 'react';

export const useCloseEye = (setcloseEye: (closeEye: boolean) => void) => {
  // const [closeEye /*setcloseEye*/] = useState<boolean>(false);

  let timeout: NodeJS.Timeout;

  const setTimeoutRandomNumber = (): NodeJS.Timeout =>
    setTimeout(() => {
      setcloseEye(false);
      setTimeout(() => {
        setcloseEye(true);
        timeout = setTimeoutRandomNumber();
      }, 1000);
    }, Math.floor(Math.random() * 20 + 6) * 1000);

  useEffect(() => {
    timeout = setTimeoutRandomNumber();
    return () => {
      clearTimeout(timeout);
    };
  });
};
