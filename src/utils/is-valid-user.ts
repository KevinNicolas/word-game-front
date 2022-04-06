import { LoginData, SignupData } from "@types";

const instanceOfSignupData = (object: any): object is SignupData => {
  return "username" in object;
};

export const isValidUser = (context: LoginData | SignupData): boolean => {
  if (
    context.email === "" ||
    context.password === "" ||
    (instanceOfSignupData(context) && context.username === "")
  )
    return false;

  return true;
};
