import { InputHTMLAttributes } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  required?: boolean
}

export const Input = ({ placeholder, required = true, ...props }: InputProps) => {
  const containerClassName = required ? clsx(s.container, s.required) : s.container

  return (
    <div className={containerClassName}>
      <input {...props} className={s.input} placeholder={placeholder} required={required} />
      {required && <span className={s.requiredStar}>*</span>}
    </div>
  )
}
