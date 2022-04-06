export interface AuthData {
  email: string;
  password: string;
}

export interface LoginData extends AuthData {}
export interface SignupData extends AuthData {
  username: string;
}
