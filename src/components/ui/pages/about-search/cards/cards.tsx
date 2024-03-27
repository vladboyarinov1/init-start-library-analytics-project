import { Link } from 'react-router-dom'

import { AnalyticsChart, AnalyticsGraph, Search } from '@/icons'

import s from './cards.module.scss'

import { Button } from '../../../components/button'

const cards = [
  {
    id: 1,
    img: <Search color={'white'} size={20} />,
    path: '/data_search',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitt.',
    title: 'Поиск данных',
  },
  {
    id: 2,
    img: <AnalyticsGraph color={'white'} size={20} />,
    path: '/visualization',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Аналитика',
  },
  {
    id: 3,
    img: <AnalyticsChart color={'white'} size={20} />,
    path: '/path3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elitttt.',
    title: 'Конфиденциальность',
  },
]

export const Cards = () => {
  return (
    <>
      {cards.map(card => (
        <div className={s.container} key={card.id}>
          <div className={s.img}>{card.img}</div>
          <div className={s.title}>
            <h3>{card.title}</h3>
          </div>
          <div className={s.subtitle}>
            <p>{card.subtitle}</p>
          </div>
          <Button variant={'link'}>
            <Link to={card.path}>Перейти</Link>
          </Button>
        </div>
      ))}
    </>
  )
}
