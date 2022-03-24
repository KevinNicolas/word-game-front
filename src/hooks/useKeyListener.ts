import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { fromEvent, Observable } from "rxjs"
import { pluck } from "rxjs/operators"

interface TypedWord {
  lenght: number
  value: string
}

export const useKeyListener = (pressEnter: () => void, clearWord: () => void): [TypedWord, Dispatch<SetStateAction<TypedWord>>, Observable<String>] => {
  const [typedWord, settypedWord] = useState<TypedWord>({ value: '', lenght: 0 })
  
  const keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe<string>(pluck('key'))

  useEffect(() => {
    const keyDownSuscriptor = keyDown$.subscribe((keyPressed: string): void => {
      const isValidLetter = (
        (keyPressed.length === 1) && 
        (/[a-z A-z]/g.test(keyPressed)) && 
        (keyPressed !== ' ') && 
        (typedWord.value.length < typedWord.lenght)
      )
      
      if (isValidLetter) { return settypedWord(({ value }: TypedWord) => ({ ...typedWord, value: `${value}${keyPressed}` })) }
      
      switch(keyPressed.toLowerCase()) {
        case 'backspace': {
          if (typedWord.lenght === typedWord.value.length) return clearWord()
          return settypedWord(({ value }: TypedWord) => ({ ...typedWord, value: value.substring(0, value.length - 1)}))
        }
        case 'enter': if (typedWord.lenght === typedWord.value.length) pressEnter(); break
      }
    })

    return () => { keyDownSuscriptor.unsubscribe() }
  })
  return [typedWord, settypedWord, keyDown$]
}