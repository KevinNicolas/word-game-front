import { EmailInput, PasswordInput } from "@components"
import { AuthFormContext } from "@context"
import { AuthData } from "@types"
import { useState } from "react"
import { AuthStyles } from "./auth-styles"


export const Auth = () => {
  const [isLogin, setisLogin] = useState<boolean>(false)

  const [authFormData, setauthFormData] = useState<AuthData>({
    email: '',
    password: '',
    isLogin: false
  })

  return (
    <AuthFormContext.Provider value={{ authData: authFormData, setauthData: setauthFormData }}>
      <AuthStyles isLogin={authFormData.isLogin}>
        <div className="page-container">
          <div className="auth-container">
            <div className="signup-container">
              <div className="signup-header" onClick={() => { if (authFormData.isLogin) setauthFormData({ ...authFormData, isLogin: false }) }}>
                <span>Registrarse</span>
              </div>
            </div>
            <div className="login-container">
              <div className="login-header" onClick={() => { if (!authFormData.isLogin) setauthFormData({ ...authFormData, isLogin: true }) }}>
                <span>Ingresar</span>
              </div>
              <div className="login-body">
                <form action="">
                  <EmailInput isLogin={true} />
                  <PasswordInput />
                </form>
                <button className="login-button"><span>Ingresar</span></button>
              </div>
            </div>
          </div>
        </div>
      </AuthStyles>
    </AuthFormContext.Provider>
  )
}
