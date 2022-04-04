import { AuthData } from "@types"
import React, { createContext } from "react"


interface ContextProps {
  authData: AuthData
  setauthData: React.Dispatch<React.SetStateAction<AuthData>>
}

const authDataDefaultValues: AuthData = {
  email: '',
  password: '',
  username: ''
}

export const AuthFormContext = createContext<ContextProps>({ authData: authDataDefaultValues, setauthData: () => {} })