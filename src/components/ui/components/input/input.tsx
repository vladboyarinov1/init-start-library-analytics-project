import { InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: '' | boolean | undefined
}

export const Input = ({ error, placeholder, ...props }: InputProps) => {
  //const containerClassName = required ? clsx(s.container, s.required) : s.container

  return (
    <div>
      <input {...props} className={!error ? s.input : s.error} placeholder={placeholder} required />
    </div>
  )
}
//{required && <span className={s.requiredStar}>*</span>}
