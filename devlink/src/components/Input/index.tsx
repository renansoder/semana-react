import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import './input.css'

type IProps = {
  type?: HTMLInputTypeAttribute | undefined
  placeholder?: string | undefined
  value?: string | number | readonly string[] | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  autoComplete?: string | undefined
}

export const Input = (props: IProps) => {
  return <input className='form-input' {...props} />
}
