import { EmailInput, PasswordInput, TraditionalLoading } from "@components"
import { AuthFormContext } from "@context"
import { AuthData } from "@types"
import { TextInput } from "components/inputs/text-input/Text-input"
import { useEffect, useState } from "react"
import { isValidUser } from "utils/is-valid-user"
import { AuthStyles } from "./auth-styles"


export const Auth = () => {
  const [validations, setvalidations] = useState<{ isLogin: boolean, isValidUser: boolean }>({
    isLogin: false,
    isValidUser: false
  })
  const [isLoading, setisLoading] = useState<boolean>(false)

  const [authFormData, setauthFormData] = useState<AuthData>({
    email: '',
    password: '',
    username: ''
  })

  const analyzeAuthFormData = () => {
    if (isValidUser({ authData: authFormData, isLogin: validations.isLogin })) setvalidations({ ...validations, isValidUser: true })
    else setvalidations({ ...validations, isValidUser: false })
  }

  useEffect(() => { analyzeAuthFormData() }, [authFormData, validations.isLogin])

  return (
    <AuthFormContext.Provider value={{ authData: authFormData, setauthData: setauthFormData }}>
      <AuthStyles isLogin={validations.isLogin} isValidUser={validations.isValidUser}>
        <div className="page-container">
          <div className="auth-container">
            <div className="signup-container">
              <div className="signup-header" onClick={() => { if (validations.isLogin) setvalidations({...validations, isLogin: false}) }}>
                <span>Registrarse</span>
              </div>
              <div className="signup-body">
                <form>
                  <TextInput
                    epic="Username"
                    defaultValue={authFormData.username}
                    setTextCallback={(username) => { if (username !== authFormData.username) setauthFormData({ ...authFormData, username }) }}
                  />
                  <EmailInput setEmailCallback={(email) => { setauthFormData({ ...authFormData, email }) }} />
                  <PasswordInput setPasswordCallback={(password) => { setauthFormData({ ...authFormData, password }) }} />
                </form>
                <button className="signup-button center" onClick={() => { if (validations.isValidUser) setisLoading(!isLoading) }}>
                  {
                    isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Registrarse</span>
                  }
                </button>
              </div>
            </div>
            <div className="login-container">
              <div className="login-header" onClick={() => { if (!validations.isLogin) setvalidations({ ...validations, isLogin: true }) }}>
                <span>Ingresar</span>
              </div>
              <div className="login-body">
                <form action="">
                  <EmailInput setEmailCallback={(email) => { setauthFormData({ ...authFormData, email }) }} />
                  <PasswordInput setPasswordCallback={(password) => { setauthFormData({ ...authFormData, password }) }} />
                </form>
                <button className="login-button">
                  {
                    isLoading ? <TraditionalLoading size={30} color="orange" /> : <span>Ingresar</span>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </AuthStyles>
    </AuthFormContext.Provider>
  )
}
