import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  background?: CSSProperties['backgroundColor']
  borderRadius?: CSSProperties['borderRadius']
  children: ReactNode
  className?: string
  height: CSSProperties['height']
  maxWidth: CSSProperties['maxWidth']
  pb?: CSSProperties['paddingBottom']
  pl?: CSSProperties['paddingLeft']
  pr?: CSSProperties['paddingRight']
  pt?: CSSProperties['paddingTop']
  px?: CSSProperties['paddingRight']
  py?: CSSProperties['paddingLeft']
}

export const Card = (props: CardProps & Omit<ComponentPropsWithoutRef<'div'>, keyof CardProps>) => {
  const {
    background,
    borderRadius,
    children,
    className,
    height,
    maxWidth,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    style,
  } = props

  const styles = {
    ...(pr && { paddingRight: pr }),
    ...(pl && { paddingLeft: pl }),
    ...(pt && { paddingTop: pt }),
    ...(height && { height: height }),
    ...(maxWidth && { maxWidth: maxWidth }),
    ...(pb && { paddingBottom: pb }),
    ...(px && { paddingLeft: px, paddingRight: px }),
    ...(py && { paddingBottom: py, paddingTop: py }),
    ...(background && { backgroundColor: background }),
    ...(borderRadius && { borderRadius: borderRadius }),
    ...style,
  }

  return (
    <div className={`${s.wrapper} ${className}`} style={styles}>
      {children}
    </div>
  )
}
