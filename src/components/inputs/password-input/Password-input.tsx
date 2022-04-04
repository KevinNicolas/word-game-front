import { PasswordInputStyles } from './password-input-styles'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useAuthFormContext } from 'hooks/use-auth-form-context'

interface Props {
  setPasswordCallback: (password: string) => void
}

export const PasswordInput = ({ setPasswordCallback }: Props) => {

  const [showPassword, setshowPassword] = useState<boolean>(false)
  const [passwordInput, setpasswordInput] = useState<string>('')
  const { authData, setauthData } = useAuthFormContext()
  

  const handleBlurEvent = () => { setauthData({ ...authData, password: passwordInput }) }

  useEffect(() => { setpasswordInput(authData.password) }, [authData.password])

  return (
    <PasswordInputStyles>
      <div className='password-input-container'>
        <span className="epic">Contraseña</span>
        <div className="input-container">
          <input 
            type={showPassword ? 'text' : 'password'}
            autoComplete="on"
            defaultValue={authData.password}
            onInput={(event) => { setpasswordInput((event.target as any).value) }}
            onBlur={() => { handleBlurEvent() }}
          />
          <button type='button' onClick={() => { setshowPassword(!showPassword) }}>
            { showPassword ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} /> }
          </button>
        </div>
      </div>
    </PasswordInputStyles>
  )
}
