import { Link } from 'react-router-dom'

import { Cards } from '@/components/ui/pages/about-search/cards'
import { Logo } from '@/icons'

import s from './about-search.module.scss'

import { Button } from '../../components/button'

export const AboutSearch = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link to={'/about_search'}>О системе поиска</Link>
          </li>
          <li>
            <Link to={'/data_search'}>Поиск данных</Link>
          </li>
          <li>
            <Link to={'/visualization'}>Аналитика</Link>
          </li>
          <li>
            <Link to={'/publications'}>Кондифенциальность</Link>
          </li>
          <li>
            <Link to={'/publications'}>Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={s.container}>
        <div className={s.logo}>
          <Logo size={90} />
        </div>
        <div className={s.title}>
          <h1>БНТУ Наукометрия</h1>
        </div>
        <div className={s.subtitle}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className={s.button}>
          <Button>Поиск данных</Button>
        </div>
        <div className={s.cards}>
          <Cards />
        </div>
      </div>
    </div>
  )
}
