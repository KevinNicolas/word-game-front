import { useDebounce } from 'hooks/use-debounce';
import { useState } from 'react';
import { MdEmail, MdMarkEmailRead, MdOutlineClose } from 'react-icons/md';
import { EmailInputStyles } from './email-input-styles';

export const EmailInput = ({ setInputContentCallback }: { setInputContentCallback: (content: string) => void }) => {
  const [emailInput, setemailInput] = useState<string>('');
  const [error, seterror] = useState<{ message: string; isError: boolean }>({
    isError: false,
    message: '',
  });
  const [status, setstatus] = useState<'normal' | 'checked' | 'error'>('normal');

  const parseWord = (event: any) => {
    const word: string = event.target.value;
    if (word !== '') {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(word)) {
        seterror({ ...error, isError: false });
        setInputContentCallback(word);
        setstatus('checked');
      } else {
        seterror({ isError: true, message: 'Invalid email format' });
        setInputContentCallback('');
        setstatus('error');
      }
    } else if (word === '') {
      seterror({ ...error, isError: false });
      setInputContentCallback(word);
      setstatus('normal');
    }
  };

  const debouncedEmailInputHandler = useDebounce(parseWord, 600);

  return (
    <EmailInputStyles showErrorLabel={error.isError}>
      <div className="email-input-container">
        <span className="epic">Email</span>
        <div className="input-container">
          <input type="email" placeholder="example@email.com" onInput={debouncedEmailInputHandler} />
          {status === 'normal' ? (
            <MdEmail />
          ) : status === 'error' ? (
            <MdOutlineClose className="alert" />
          ) : status === 'checked' ? (
            <MdMarkEmailRead className="success" />
          ) : (
            <></>
          )}
        </div>
        <span className="error-label">{error.message}</span>
      </div>
    </EmailInputStyles>
  );
};
