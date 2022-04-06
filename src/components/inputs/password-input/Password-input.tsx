import { PasswordInputStyles } from "./password-input-styles";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "throttle-debounce";
import { useDebounce } from "hooks/use-debounce";

interface Props {
  setInputContentCallback: (password: string) => void;
}

export const PasswordInput = ({ setInputContentCallback }: Props) => {
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const passwordInputHandler = (event: any) => setInputContentCallback(event.target.value);

  const debouncedPasswordInputHandler = useDebounce(passwordInputHandler, 600)

  return (
    <PasswordInputStyles>
      <div className="password-input-container">
        <span className="epic">Contraseña</span>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="on"
            onInput={debouncedPasswordInputHandler}
          />
          <button
            type="button"
            onClick={() => {
              setshowPassword(!showPassword);
            }}
          >
            {showPassword ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
          </button>
        </div>
      </div>
    </PasswordInputStyles>
  );
};
