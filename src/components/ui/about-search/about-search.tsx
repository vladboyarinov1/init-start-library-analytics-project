import { Link } from 'react-router-dom'

import { Cards } from '@/components/ui/about-search/cards'
import { Card } from '@/components/ui/card'
import { Logo } from '@/icons'

import s from './about-search.module.scss'

export const AboutSearch = () => {
  return (
    <div>
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
      <Card className={s.container} height={'auto'} maxWidth={'100%'} px={120} py={57}>
        <div className={s.logo}>
          <Logo size={90} />
        </div>
        <div className={s.title}>
          <h1>БНТУ Наукометрия</h1>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <button>Поиск данных</button>
        <div className={s.cards}>
          <Cards />
        </div>
      </Card>
    </div>
  )
}
