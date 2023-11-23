import { IconProps, IconWrapper } from '../icon-wrapper'

export const ArrowUp = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 1024 1024'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'm488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
