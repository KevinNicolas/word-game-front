import { useDebounce } from 'hooks/use-debounce';
import { useEffect, useState } from 'react';

interface Props {
  epic: string;
  setTextCallback: (text: string) => void;
}

export const TextInput = ({ epic, setTextCallback }: Props) => {
  const setTextCallbackHandler = (event: any) => setTextCallback(event.target.value);

  const debouncedSetTextCallbackHandler = useDebounce(setTextCallbackHandler, 600);

  return (
    <div className="username-input-container">
      <span>{epic}</span>
      <input type="text" placeholder="Artur..." onInput={debouncedSetTextCallbackHandler} />
    </div>
  );
};
