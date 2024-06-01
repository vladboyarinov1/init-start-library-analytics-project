import error404 from '@/icons/error-page-svg.svg'

import s from './error-page.module.scss'

export const ErrorPage = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <img alt={'404'} className={s.error404} src={error404} />
      </div>
    </div>
  )
}
