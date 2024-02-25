import { Link } from 'react-router-dom'

import { AnalyticsChart, AnalyticsGraph, Search } from '@/icons'

import s from './cards.module.scss'
const cards = [
  {
    id: 1,
    img: <Search color={'white'} size={20} />,
    path: '/path1',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitt.',
    title: 'Поиск данных',
  },
  {
    id: 2,
    img: <AnalyticsGraph color={'white'} size={20} />,
    path: '/path2',
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
          <div className={s.link}>
            <Link to={card.path}>Перейти</Link>
          </div>
        </div>
      ))}
    </>
  )
}
