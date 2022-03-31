import { PasswordInputStyles } from './password-input-styles'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { useState } from 'react'
import { useAuthFormContext } from 'hooks/use-auth-form-context'

export const PasswordInput = () => {

  const [showPassword, setshowPassword] = useState<boolean>(false)
  const [passwordInput, setpasswordInput] = useState<string>('')
  const { authData, setauthData } = useAuthFormContext()

  const handleBlurEvent = () => { setauthData({ ...authData, password: passwordInput }) }

  return (
    <PasswordInputStyles>
      <div className='password-input-container'>
        <span className="epic">Contraseña</span>
        <div className="input-container">
          <input 
            type={showPassword ? 'text' : 'password'}
            onInput={(event) => { setpasswordInput((event.target as any).value) }}
            onBlur={() => { handleBlurEvent() }}
          />
          <button onClick={() => { setshowPassword(!showPassword) }}>
            { showPassword ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} /> }
          </button>
        </div>
      </div>
    </PasswordInputStyles>
  )
}
