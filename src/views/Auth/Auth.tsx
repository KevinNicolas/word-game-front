import { EmailInput, PasswordInput, TraditionalLoading } from '@components';
import { LoginData, SignupData } from '@types';
import { TextInput } from 'components/inputs/text-input/Text-input';
import { useDebounce } from 'hooks/use-debounce';
import { useEffect, useMemo, useState } from 'react';
import { isValidUser } from 'utils/is-valid-user';
import { AuthStyles } from './auth-styles';
import { Eye } from './page-components/Eye';
import { LoginForm } from './page-components/Login-form';
import { SignupForm } from './page-components/Signup-form';
import { useCloseEye } from './page-components/use-close-eye';

export const Auth = () => {
  const [isLogin, setisLogin] = useState(false);

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
    <AuthStyles isLogin={isLogin} isValidUser={validations.isValidUser}>
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
            <SignupForm setIsLogin={setisLogin} />
            <LoginForm setIsLogin={setisLogin} isLogin={isLogin} />
          </div>
        </div>
      </div>
    </AuthStyles>
  );
};
