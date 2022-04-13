import { EmailInput, PasswordInput, TraditionalLoading } from '@components';
import { LoginData } from '@types';
import { useEffect, useState } from 'react';
import { Eye } from './Eye';
import { LoginFormStyles } from './login-form-styles';
import { Validations } from './types';
import { useCloseEye } from './use-close-eye';

export const LoginForm = ({ setIsLogin, isLogin }: { setIsLogin: (param: boolean) => void; isLogin: boolean }) => {
  const [validations, setvalidations] = useState<Validations>({
    isValidUser: false,
    isLoading: false,
  });

  const [loginForm, setloginForm] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [closeEye, setcloseEye] = useState(false);
  useCloseEye(setcloseEye);

  useEffect(() => {
    if (loginForm.email.length > 2 && loginForm.password.length > 3) setvalidations({ ...validations, isValidUser: true });
    else setvalidations({ ...validations, isValidUser: false });
  }, [loginForm]);

  return (
    <LoginFormStyles isLogin={isLogin} isValidUser={validations.isValidUser}>
      <div className="login-container">
        <div className="login-header" onClick={() => setIsLogin(true)}>
          <Eye eyeDirection="left" closeEye={closeEye} />
          <span>Ingresar</span>
          <Eye eyeDirection="right" closeEye={closeEye} />
        </div>
        <div className="login-body">
          <form action="">
            <EmailInput setInputContentCallback={(email: string) => setloginForm((loginFormData) => ({ ...loginFormData, email }))} />
            <PasswordInput setInputContentCallback={(password: string) => setloginForm((loginFormData) => ({ ...loginFormData, password }))} />
          </form>
          <button className="login-button">{validations.isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Ingresar</span>}</button>
          <span>
            {loginForm.email.toString()} | {loginForm.password.toString()}
          </span>
        </div>
      </div>
    </LoginFormStyles>
  );
};
