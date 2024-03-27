import { IconProps, IconWrapper } from '@/icons'

export const AtomicScience = (allProps: IconProps) => {
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
              'M19.75 7.75H15.25C14.9848 7.75 14.7304 7.64464 14.5429 7.45711C14.3554 7.26957 14.25 7.01522 14.25 6.75V2.25M19.75 7.75V20.75C19.75 21.0152 19.6446 21.2696 19.4571 21.4571C19.2696 21.6446 19.0152 21.75 18.75 21.75H5.25C4.98478 21.75 4.73043 21.6446 4.54289 21.4571C4.35536 21.2696 4.25 21.0152 4.25 20.75V3.25C4.25 2.98478 4.35536 2.73043 4.54289 2.54289C4.73043 2.35536 4.98478 2.25 5.25 2.25H14.25M19.75 7.75L14.25 2.25'
            }
            stroke={'currentColor'}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          />
          <path
            d={
              'M11.9999 19.873C13.3314 19.873 14.4109 17.2987 14.4109 14.123C14.4109 10.9474 13.3314 8.37305 11.9999 8.37305C10.6683 8.37305 9.58887 10.9474 9.58887 14.123C9.58887 17.2987 10.6683 19.873 11.9999 19.873Z'
            }
            stroke={'currentColor'}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          />
          <path
            d={
              'M13.2056 16.2111C15.9558 14.6233 17.6455 12.4013 16.9797 11.2481C16.314 10.095 13.5448 10.4473 10.7946 12.0352C8.0444 13.623 6.35466 15.845 7.02044 16.9981C7.68622 18.1513 10.4554 17.7989 13.2056 16.2111Z'
            }
            stroke={'currentColor'}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          />
          <path
            d={
              'M16.9797 16.998C17.6455 15.8448 15.9558 13.6228 13.2056 12.035C10.4554 10.4471 7.68622 10.0948 7.02044 11.248C6.35466 12.4011 8.0444 14.6231 10.7946 16.2109C13.5448 17.7988 16.314 18.1511 16.9797 16.998Z'
            }
            stroke={'currentColor'}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
