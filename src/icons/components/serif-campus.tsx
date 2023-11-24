import { IconProps, IconWrapper } from '../icon-wrapper'

export const SerifCampus = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M12.5 2L22.5 6.28571V7.71429H21.1667C21.1667 7.90774 21.0955 8.07515 20.9531 8.21652C20.8108 8.35789 20.6424 8.42857 20.4479 8.42857H4.55208C4.35764 8.42857 4.18924 8.35789 4.04688 8.21652C3.90451 8.07515 3.83333 7.90774 3.83333 7.71429H2.5V6.28571L12.5 2ZM5.16667 9.14286H7.83333V17.7143H9.16667V9.14286H11.8333V17.7143H13.1667V9.14286H15.8333V17.7143H17.1667V9.14286H19.8333V17.7143H20.4479C20.6424 17.7143 20.8108 17.785 20.9531 17.9263C21.0955 18.0677 21.1667 18.2351 21.1667 18.4286V19.1429H3.83333V18.4286C3.83333 18.2351 3.90451 18.0677 4.04688 17.9263C4.18924 17.785 4.35764 17.7143 4.55208 17.7143H5.16667V9.14286ZM21.7812 19.8571C21.9757 19.8571 22.1441 19.9278 22.2865 20.0692C22.4288 20.2106 22.5 20.378 22.5 20.5714V22H2.5V20.5714C2.5 20.378 2.57118 20.2106 2.71354 20.0692C2.8559 19.9278 3.02431 19.8571 3.21875 19.8571H21.7812Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}