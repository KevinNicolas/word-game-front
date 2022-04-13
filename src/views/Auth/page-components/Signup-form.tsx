import { EmailInput, PasswordInput, TextInput, TraditionalLoading } from '@components';
import { SignupData } from '@types';
import { useEffect, useState } from 'react';
import { SignupFormStyles } from './signup-form-styles';
import { Validations } from './types';

export const SignupForm = ({ setIsLogin }: { setIsLogin: (param: boolean) => void }) => {
  const [validations, setvalidations] = useState<Validations>({
    isValidUser: false,
    isLoading: false,
  });

  const [signupForm, setsignupForm] = useState<SignupData>({
    email: '',
    password: '',
    username: '',
  });

  useEffect(() => {
    if (signupForm.email.length > 2 && signupForm.password.length > 3 && signupForm.username.length > 3) setvalidations({ ...validations, isValidUser: true });
    else setvalidations({ ...validations, isValidUser: false });
  }, [signupForm]);

  return (
    <SignupFormStyles isValidUser={validations.isValidUser && signupForm.password.length > 3 && signupForm.username.length > 3}>
      <div className="signup-container">
        <div className="signup-header" onClick={() => setIsLogin(false)}>
          <span>Registrarse</span>
        </div>
        <div className="signup-body">
          <form>
            <TextInput epic={'Username'} setTextCallback={(username: string) => setsignupForm((signupFormData) => ({ ...signupFormData, username }))} />
            <EmailInput setInputContentCallback={(email: string) => setsignupForm((signupFormData) => ({ ...signupFormData, email }))} />
            <PasswordInput setInputContentCallback={(password: string) => setsignupForm((signupFormData) => ({ ...signupFormData, password }))} />
          </form>
          <button className="signup-button center" onClick={() => {}}>
            {validations.isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Registrarse</span>}
          </button>
        </div>
      </div>
    </SignupFormStyles>
  );
};
