import { useEffect, useState } from "react"

interface Props {
  epic: string
  defaultValue: string
  setTextCallback: (text: string) => void
}

export const TextInput = ({ epic, defaultValue, setTextCallback }: Props) => {
  const [textInput, settextInput] = useState<string>('')
  
  useEffect(() => { settextInput(defaultValue) }, []) 

  return (
    <div className="username-input-container">
      <span>Username</span>
      <input
        type="text"
        placeholder="Artur..."
        defaultValue={textInput}
        onInput={(event) => { settextInput((event.target as any).value) }}
        onBlur={() => { 
          setTextCallback(textInput) 
        }}
      />
                  </div>
  )
}
