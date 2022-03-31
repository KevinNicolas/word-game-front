import { SwapLoading } from "components/swap-loading/Swap-loading"
import { useAuthFormContext } from "hooks/use-auth-form-context"
import { useState } from "react"
import { MdEmail, MdMarkEmailRead, MdOutlineClose } from "react-icons/md"
import { EmailInputStyles } from "./email-input-styles"

interface Props {
  isLogin: boolean
}

export const EmailInput = ({ isLogin }: Props) => {
  const [emailInput, setemailInput] = useState<string>('')
  const [error, seterror] = useState<{ message: string, isError: boolean }>({
    isError: false,
    message: ''
  })
  const [status, setstatus] = useState<'normal' | 'loading' | 'checked' | 'error'>('normal')

  const { authData, setauthData } = useAuthFormContext()

  const handleBlurEvent = () => {
    if (emailInput !== '' && authData.email !== emailInput) {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInput)) {
        seterror({...error, isError: false})
        setauthData({ ...authData, email: emailInput })
        setstatus('checked')
      } else {
        seterror({ isError: true, message: 'Invalid email format' })
        setauthData({ ...authData, email: '' })
        setstatus('error')
      }
      
    } else if (emailInput === '') {
      seterror({ ...error, isError: false })
      setstatus('normal')
      setauthData({ ...authData, email: '' })
    }
  }

  return (
    <EmailInputStyles showErrorLabel={error.isError}>
      <div className="email-input-container">
        <span className="epic">Email</span>
        <div className="input-container">
          <input 
            type="email"
            placeholder="example@email.com"
            onInput={(event) => { setemailInput((event.target as any).value) }}
            onBlur={() => { handleBlurEvent() }}
          />
          {
            status === 'normal' ? <MdEmail /> :
            status === 'loading' ? <SwapLoading sizePx={20} /> :
            status === 'error' ? <MdOutlineClose className="alert" /> :
            status === 'checked' ? <MdMarkEmailRead className="success" /> : <></>
          }
        </div>
        <span className="error-label">{error.message}</span>
      </div>
    </EmailInputStyles>
  )
}
