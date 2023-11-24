import { IconProps, IconWrapper } from '../icon-wrapper'

export const SearchBook = (allProps: IconProps) => {
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
              'M7.70005 2.40039C7.06353 2.40039 6.45308 2.65325 6.00299 3.10333C5.55291 3.55342 5.30005 4.16387 5.30005 4.80039V19.2004C5.30005 19.8369 5.55291 20.4474 6.00299 20.8974C6.45308 21.3475 7.06353 21.6004 7.70005 21.6004H19.1C19.2592 21.6004 19.4118 21.5372 19.5243 21.4247C19.6368 21.3121 19.7 21.1595 19.7 21.0004C19.7 20.8413 19.6368 20.6886 19.5243 20.5761C19.4118 20.4636 19.2592 20.4004 19.1 20.4004H7.70005C7.38179 20.4004 7.07656 20.274 6.85152 20.0489C6.62648 19.8239 6.50005 19.5187 6.50005 19.2004H18.5C18.8183 19.2004 19.1235 19.074 19.3486 18.8489C19.5736 18.6239 19.7 18.3187 19.7 18.0004V4.80039C19.7 4.16387 19.4472 3.55342 18.9971 3.10333C18.547 2.65325 17.9366 2.40039 17.3 2.40039H7.70005ZM14.4032 11.8552L15.9248 13.3756C16.0375 13.4883 16.1008 13.6411 16.1008 13.8004C16.1008 13.9597 16.0375 14.1125 15.9248 14.2252C15.8122 14.3379 15.6594 14.4011 15.5 14.4011C15.3407 14.4011 15.1879 14.3379 15.0752 14.2252L13.5548 12.7036C12.9346 13.1136 12.1843 13.2786 11.4493 13.1668C10.7143 13.0549 10.047 12.6742 9.57681 12.0983C9.1066 11.5224 8.86697 10.7925 8.90437 10.05C8.94178 9.30747 9.25355 8.6053 9.77925 8.0796C10.305 7.55389 11.0071 7.24212 11.7496 7.20472C12.4922 7.16731 13.2221 7.40695 13.798 7.87716C14.3738 8.34737 14.7546 9.01466 14.8664 9.74965C14.9783 10.4846 14.8132 11.235 14.4032 11.8552ZM10.1 10.2004C10.1 9.723 10.2897 9.26516 10.6273 8.9276C10.9648 8.59003 11.4227 8.40039 11.9 8.40039C12.3774 8.40039 12.8353 8.59003 13.1728 8.9276C13.5104 9.26516 13.7 9.723 13.7 10.2004C13.7 10.6778 13.5104 11.1356 13.1728 11.4732C12.8353 11.8107 12.3774 12.0004 11.9 12.0004C11.4227 12.0004 10.9648 11.8107 10.6273 11.4732C10.2897 11.1356 10.1 10.6778 10.1 10.2004Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}