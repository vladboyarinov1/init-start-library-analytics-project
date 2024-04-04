import { IconProps, IconWrapper } from '@/icons'

export const List = (allProps: IconProps) => {
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
          <path d={'M8.625 3.75H22.125V5.25H8.625V3.75Z'} fill={'currentColor'} />
          <path d={'M8.625 11.25H22.125V12.75H8.625V11.25Z'} fill={'currentColor'} />
          <path d={'M8.625 18.75H22.125V20.25H8.625V18.75Z'} fill={'currentColor'} />
          <path d={'M5.625 7.5V1.875H2.625V3.375H4.125V7.5H5.625Z'} fill={'currentColor'} />
          <path
            d={
              'M2.625 12.2865V14.625H6.375V13.125H4.30205L6.375 12.0885V9H2.625V10.5H4.875V11.1615L2.625 12.2865Z'
            }
            fill={'currentColor'}
          />
          <path
            d={
              'M2.625 20.625V22.125H6.375V16.125H2.625V17.625H4.875V18.375H3.75V19.875H4.875V20.625H2.625Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
