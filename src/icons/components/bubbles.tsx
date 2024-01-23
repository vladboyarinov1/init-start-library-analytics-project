import { IconProps, IconWrapper } from '@/icons'

export const Bubbles = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'20px'}
          viewBox={'0 0 24 24'}
          width={'20px'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M7.5 18C6.4 18 5.45833 17.6083 4.675 16.825C3.89167 16.0417 3.5 15.1 3.5 14C3.5 12.9 3.89167 11.9583 4.675 11.175C5.45833 10.3917 6.4 10 7.5 10C8.6 10 9.54167 10.3917 10.325 11.175C11.1083 11.9583 11.5 12.9 11.5 14C11.5 15.1 11.1083 16.0417 10.325 16.825C9.54167 17.6083 8.6 18 7.5 18ZM7.5 16C8.05 16 8.521 15.804 8.913 15.412C9.305 15.02 9.50067 14.5493 9.5 14C9.5 13.45 9.304 12.979 8.912 12.587C8.52 12.195 8.04933 11.9993 7.5 12C6.95 12 6.479 12.196 6.087 12.588C5.695 12.98 5.49933 13.4507 5.5 14C5.5 14.55 5.696 15.021 6.088 15.413C6.48 15.805 6.95067 16.0007 7.5 16ZM17 14C15.4667 14 14.1667 13.4667 13.1 12.4C12.0333 11.3333 11.5 10.0333 11.5 8.5C11.5 6.96667 12.0333 5.66667 13.1 4.6C14.1667 3.53333 15.4667 3 17 3C18.5333 3 19.8333 3.53333 20.9 4.6C21.9667 5.66667 22.5 6.96667 22.5 8.5C22.5 10.0333 21.9667 11.3333 20.9 12.4C19.8333 13.4667 18.5333 14 17 14ZM15 21C14.1667 21 13.4583 20.7083 12.875 20.125C12.2917 19.5417 12 18.8333 12 18C12 17.1667 12.2917 16.4583 12.875 15.875C13.4583 15.2917 14.1667 15 15 15C15.8333 15 16.5417 15.2917 17.125 15.875C17.7083 16.4583 18 17.1667 18 18C18 18.8333 17.7083 19.5417 17.125 20.125C16.5417 20.7083 15.8333 21 15 21ZM17 12C17.9833 12 18.8127 11.6627 19.488 10.988C20.1633 10.3133 20.5007 9.484 20.5 8.5C20.5 7.51667 20.1627 6.68733 19.488 6.012C18.8133 5.33667 17.984 4.99933 17 5C16.0167 5 15.1873 5.33733 14.512 6.012C13.8367 6.68667 13.4993 7.516 13.5 8.5C13.5 9.48333 13.8373 10.3127 14.512 10.988C15.1867 11.6633 16.016 12.0007 17 12ZM15 19C15.2833 19 15.521 18.904 15.713 18.712C15.905 18.52 16.0007 18.2827 16 18C16 17.7167 15.904 17.479 15.712 17.287C15.52 17.095 15.2827 16.9993 15 17C14.7167 17 14.479 17.096 14.287 17.288C14.095 17.48 13.9993 17.7173 14 18C14 18.2833 14.096 18.521 14.288 18.713C14.48 18.905 14.7173 19.0007 15 19Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
