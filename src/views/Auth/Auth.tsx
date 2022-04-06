import { EmailInput, PasswordInput, TraditionalLoading } from '@components';
import { LoginData, SignupData } from '@types';
import { TextInput } from 'components/inputs/text-input/Text-input';
import { useDebounce } from 'hooks/use-debounce';
import { useEffect, useState } from 'react';
import { isValidUser } from 'utils/is-valid-user';
import { AuthStyles } from './auth-styles';

export const Auth = () => {
  const [validations, setvalidations] = useState<{
    isLogin: boolean;
    isValidUser: boolean;
    isLoading: boolean;
  }>({
    isLogin: false,
    isValidUser: false,
    isLoading: false,
  });

  const [loginForm, setloginForm] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [signupForm, setsignupForm] = useState<SignupData>({
    email: '',
    password: '',
    username: '',
  });

  const analyzeAuthFormData = useDebounce((form: LoginData | SignupData) => {
    if (isValidUser(form)) setvalidations({ ...validations, isValidUser: true });
    else setvalidations({ ...validations, isValidUser: false });
  }, 600);

  useEffect(() => analyzeAuthFormData(loginForm), [loginForm]);
  useEffect(() => analyzeAuthFormData(signupForm), [signupForm]);

  return (
    <AuthStyles isLogin={validations.isLogin} isValidUser={validations.isValidUser}>
      <div className="page-container">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="content-wrapper center full">
          <div className="center full">
            <h1>Word-Game</h1>
          </div>
          <div className="auth-container">
            <div className="signup-container">
              <div
                className="signup-header"
                onClick={() => {
                  if (validations.isLogin) setvalidations({ ...validations, isLogin: false });
                }}
              >
                <span>Registrarse</span>
              </div>
              <div className="signup-body">
                <form>
                  <TextInput epic={'Username'} setTextCallback={(username: string) => setsignupForm({ ...signupForm, username })} />
                  <EmailInput setInputContentCallback={(email: string) => setsignupForm({ ...signupForm, email })} />
                  <PasswordInput setInputContentCallback={(password: string) => setsignupForm({ ...signupForm, password })} />
                </form>
                <button className="signup-button center" onClick={() => {}}>
                  {validations.isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Registrarse</span>}
                </button>
              </div>
            </div>
            <div className="login-container">
              <div
                className="login-header"
                onClick={() => {
                  if (!validations.isLogin && !validations.isLoading) setvalidations({ ...validations, isLogin: true });
                }}
              >
                <span>Ingresar</span>
              </div>
              <div className="login-body">
                <form action="">
                  <EmailInput setInputContentCallback={(email: string) => setloginForm({ ...loginForm, email })} />
                  <PasswordInput setInputContentCallback={(password: string) => setloginForm({ ...loginForm, password })} />
                </form>
                <button className="login-button">{validations.isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Ingresar</span>}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthStyles>
  );
};
