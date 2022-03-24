import { memo } from "react"
import { KeyboardKeyStyles } from "./keyboard-key-styles"

interface Props {
  letter: string
  toUppercase?: boolean
  pressed?: boolean
}

export const KeyboardKey = memo(({ letter, toUppercase = true, pressed = false }: Props) => {
  return (
    <KeyboardKeyStyles>
      <div className={`key-container center ${pressed ? 'pressed' : 'normal'}`}>
        <span>{ toUppercase ? letter.toUpperCase() : letter }</span>
      </div>
    </KeyboardKeyStyles>
  )
})
