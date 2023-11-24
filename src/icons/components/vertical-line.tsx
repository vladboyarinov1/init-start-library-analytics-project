import { IconProps, IconWrapper } from '@/icons'

export const VerticalLine = (allProps: IconProps) => {
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
          <line
            stroke={'currentColor'}
            strokeLinecap={'round'}
            x1={'11.8394'}
            x2={'11.8394'}
            y1={'22.4707'}
            y2={'3.4707'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
