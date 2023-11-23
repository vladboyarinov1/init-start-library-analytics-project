import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'
type RadioButtonProps = {
  checked: boolean
  id?: string
  name?: string
}
export const RadioButton = ({ checked, id, name }: RadioButtonProps) => {
  return (
    <form>
      <RadioGroup.Root aria-label={name} className={s.RadioGroupRoot} defaultValue={'default'}>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item
            checked={checked}
            className={s.RadioGroupItem}
            id={id}
            value={name ?? 'a'}
          >
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          {/*<label className={s.Label} htmlFor={'r1'}>*/}
          {/*  Default*/}
          {/*</label>*/}
        </div>
      </RadioGroup.Root>
    </form>
  )
}
