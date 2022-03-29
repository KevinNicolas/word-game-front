import { memo } from "react"
import { KeyboardKeyStyles } from "./keyboard-key-styles"

interface Props {
  letter: string
  toUppercase?: boolean
  pressed?: boolean
  good?: boolean
}

export const KeyboardKey = memo(({ letter, toUppercase = true, pressed = false, good = false }: Props) => {
  return (
    <KeyboardKeyStyles>
      <div className={`key-container center ${pressed ? 'pressed' : 'normal'} ${good ? 'good' : ''}`}>
        <span>{ toUppercase ? letter.toUpperCase() : letter }</span>
      </div>
    </KeyboardKeyStyles>
  )
})
