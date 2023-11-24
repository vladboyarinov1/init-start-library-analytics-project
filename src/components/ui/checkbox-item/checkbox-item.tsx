import { useState } from 'react'

import { Check } from '@/icons'
import * as Checkbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox-item.module.scss'

export const CheckboxItem = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }
  const CheckboxClass = clsx(s.CheckboxRoot, {
    [s.CheckboxClassUnChecked]: !checked,
  })

  return (
    <div>
      <form>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <Checkbox.Root
            checked={checked}
            className={CheckboxClass}
            id={'c1'}
            onCheckedChange={handleChange}
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <Check size={20} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className={s.Label} htmlFor={'c1'}>
            Accept terms and conditions.
          </label>
        </div>
      </form>
    </div>
  )
}
