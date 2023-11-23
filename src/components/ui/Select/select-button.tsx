import React, { useState } from 'react'

import { ArrowDown, ArrowUp, Export } from '@/icons'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select-button.module.scss'

type SelectItem = { items: { label: string }[]; label?: string }
type SelectButtonProps = {
  itemsData: SelectItem[]
  title: string
  variant: 'export' | 'primary' | 'sort'
}

export const SelectButton = ({ itemsData, title, variant }: SelectButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [activeValueName, setActiveValueName] = useState<any>('')

  console.log(activeValueName)
  const toggleOpen = () => {
    setOpen(!open)
  }
  const a = () => {
    if (activeValueName) {
      console.log('Export in ' + activeValueName)
      setActiveValueName('')
    } else {
      console.log('select value!')
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
        <div style={{ display: 'block', textAlign: 'center' }}>
          <Select.Icon className={s.SelectIcon}>
            <div className={s.ExportButton} onClick={a}>
              <Export size={20} />
            </div>
          </Select.Icon>
        </div>
      )}
      <div style={{ display: 'flex', textAlign: 'center' }}>
        <Select.Root
          onOpenChange={toggleOpen}
          onValueChange={setActiveValueName}
          open={open}
          value={activeValueName}
        >
          <Select.Trigger
            aria-label={'Food'}
            style={{ alignItems: 'center', display: 'flex', gap: 8 }}
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

  return (
    <Select.Item className={indicatorClassName} {...resProps} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      {variant != 'primary' && (
        <div className={s.SelectItemIndicator}>
          <input
            checked={activeValueName === children ?? false}
            id={children?.toString()}
            name={children?.toString()}
            onChange={() => {}}
            type={'radio'}
          />
        </div>
      )}
    </Select.Item>
  )
})
