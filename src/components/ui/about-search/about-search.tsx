import { Link } from 'react-router-dom'

import { Cards } from '@/components/ui/about-search/cards'
import { Button } from '@/components/ui/button'
import { Logo } from '@/icons'

import s from './about-search.module.scss'

export const AboutSearch = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link to={'publications'}>Публикации</Link>
          </li>
          <li>
            <Link to={'publications'}>Поиск данных</Link>
          </li>
          <li>
            <Link to={'publications'}>Аналитика</Link>
          </li>
          <li>
            <Link to={'publications'}>Кондифенциальность</Link>
          </li>
          <li>
            <Link to={'publications'}>Контакты</Link>
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
        {/*<button className={s.button}>Поиск данных</button>*/}
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
