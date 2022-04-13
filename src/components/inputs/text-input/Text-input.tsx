import { useDebounce } from 'hooks/use-debounce';
import styled from 'styled-components';

interface Props {
  epic: string;
  setTextCallback: (text: string) => void;
}

const TextInputStyles = styled.div`
  input {
    border-bottom: 2px solid transparent;
    transition: border-color 300ms linear;
    &:focus {
      border-color: var(--primary);
    }
  }
`;

export const TextInput = ({ epic, setTextCallback }: Props) => {
  const setTextCallbackHandler = (event: any) => setTextCallback(event.target.value);

  const debouncedSetTextCallbackHandler = useDebounce(setTextCallbackHandler, 600);

  return (
    <div className="username-input-container">
      <span>{epic}</span>
      <TextInputStyles>
        <input type="text" placeholder="Artur..." onInput={debouncedSetTextCallbackHandler} />
      </TextInputStyles>
    </div>
  );
};
