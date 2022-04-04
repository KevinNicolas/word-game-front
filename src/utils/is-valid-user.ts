import { AuthData } from "@types";

export const isValidUser = ({ authData: { email, password, username }, isLogin }: { authData: AuthData, isLogin: boolean }): boolean => {
  console.info('Validate user...', { email, password, username, isLogin })
  console.info('Return:', !(email === '' || password === '' || (!isLogin && username === '')))
  if (email === '' || password === '' || (!isLogin && username === '')) return false

  return true
}