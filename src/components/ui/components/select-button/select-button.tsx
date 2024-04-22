import React, { useState } from 'react'

import { ArrowDown, ArrowUp, Export } from '@/icons'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select-button.module.scss'

import { RadioButton } from '../radio-button'

type SelectItem = { items: { label: string }[]; label?: string }
type SelectButtonProps = {
  activeValueName: any
  itemsData: SelectItem[]
  name: any
  onChange?: (e: any) => void
  setFieldValue: any
  title: string
  variant: 'export' | 'primary' | 'sort'
}

export const SelectButton = ({
  activeValueName,
  itemsData,
  name,
  setFieldValue,
  title,
  variant,
}: SelectButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)

  // const [activeValueName, setActiveValueName] = useState<any>('')

  console.log(activeValueName)
  const toggleOpen = () => {
    setOpen(!open)
  }

  console.log(activeValueName)
  const a = () => {
    if (activeValueName) {
      console.log('Export in ' + activeValueName)
      // setActiveValueName('')
    } else {
      console.log('select-button value!')
    }
  }
  const WrapperClass = clsx(s.SelectTrigger, {
    [s.ExportSelectTrigger]: variant === 'export',
    [s.PrimarySelectTrigger]: variant === 'primary',
  })
  const SelectClass = clsx(s.SelectContent, {
    [s.ExportSelectContent]: variant === 'export',
  })

  return (
    <div className={WrapperClass}>
      {variant === 'export' && (
        <div>
          <Select.Icon>
            <div className={s.ExportButton} onClick={a}>
              {/*la*/}
              <Export size={20} />
            </div>
          </Select.Icon>
        </div>
      )}
      <div style={{ display: 'flex', textAlign: 'center', whiteSpace: 'nowrap', width: '100%' }}>
        <Select.Root
          onOpenChange={toggleOpen}
          onValueChange={value => setFieldValue(name, value)}
          open={open}
          value={activeValueName}
        >
          <Select.Trigger
            aria-label={'Food'}
            style={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
              gap: 8,
              justifyContent: 'space-between',
              padding: '8px 5px',
              width: '100%',
            }}
          >
            <Select.Value placeholder={title} />
            <Select.Icon className={s.SelectIcon}>
              {open ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              align={'start'}
              className={SelectClass}
              position={'popper'}
              sideOffset={10}
            >
              <Select.Viewport className={s.SelectViewport}>
                {itemsData?.map((group, index) => (
                  <React.Fragment key={group.label ?? index}>
                    <Select.Group>
                      <Select.Label className={'SelectLabel'}>{group.label}</Select.Label>
                      {group?.items.map(item => (
                        <CustomSelectItem
                          activeValueName={activeValueName}
                          key={item.label}
                          value={item.label}
                          variant={variant}
                        >
                          {item.label}
                        </CustomSelectItem>
                      ))}
                    </Select.Group>
                    {index !== itemsData.length - 1 && (
                      <Select.Separator className={s.SelectSeparator} />
                    )}
                  </React.Fragment>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  )
}
const CustomSelectItem = React.forwardRef<
  HTMLDivElement,
  Select.SelectItemProps & { activeValueName: string; variant: 'export' | 'primary' | 'sort' }
>(({ activeValueName, children, className, variant, ...resProps }: any, forwardedRef) => {
  const indicatorClassName = clsx(s.SelectItem, {
    [s.PrimarySelectItem]: variant === 'primary',
  })

  console.log(activeValueName)

  return (
    <Select.Item className={indicatorClassName} {...resProps} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      {variant != 'primary' && (
        <div className={s.SelectItemIndicator}>
          <RadioButton
            checked={activeValueName === children ?? false}
            id={children?.toString()}
            name={children?.toString()}
          />
          {/*<input*/}
          {/*  checked={activeValueName === children ?? false}*/}
          {/*  id={children?.toString()}*/}
          {/*  name={children?.toString()}*/}
          {/*  onChange={() => {}}*/}
          {/*  type={'radio'}*/}
          {/*/>*/}
        </div>
      )}
    </Select.Item>
  )
})
