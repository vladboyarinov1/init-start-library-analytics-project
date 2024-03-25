import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { changeLink } from '@/components/ui/components/breadcrumbs/breadcrumbs-slice'
import { Author, Campus, DocumentText, IndexH, Printer, Quotes, Science } from '@/icons'

import s from './timeline.module.scss'

const timelineData = [
  {
    breadcrumbs: ['Поиск данных', 'Публикации'],
    img: <DocumentText size={40} />,
    link: '/publications',
    title: 'Публикации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Авторы'],
    img: <Author size={40} />,
    link: '/authors',
    title: 'Авторы',
  },
  {
    breadcrumbs: ['Поиск данных', 'Организации'],
    img: <Campus size={40} />,
    link: '/organizations',
    title: 'Организации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Цитирования'],
    img: <Quotes size={40} />,
    link: '/citation',
    title: 'Цитирования',
  },
  {
    breadcrumbs: ['Поиск данных', 'Научное направление'],
    img: <Science size={40} />,
    link: '/scientific_direction',
    title: 'Научное направление',
  },
  {
    breadcrumbs: ['Поиск данных', 'Индекс h'],
    img: <IndexH size={40} />,
    link: '/index_h',
    title: 'Индекс h',
  },
  {
    breadcrumbs: ['Поиск данных', 'Источник публикаций(Уточнить)'],
    img: <Printer size={40} />,
    link: '/source_publications',
    title: 'Источник публикаций(Уточнить)',
  },
]

const TimelineItem = ({ data }: any) => {
  const dispatch = useDispatch()
  const onClickHandler = (path: string) => {
    dispatch(changeLink({ path }))
  }

  return (
    <div className={s.timelineItem}>
      <div className={s.timelineItemContent}>
        <Link
          className={s.timelineItemInfo}
          onClick={() => onClickHandler(data.breadcrumbs)}
          to={data.link}
        >
          <div className={s.img}>{data.img}</div>
          <div className={s.title}>{data.title}</div>
        </Link>
        <span className={s.circle} />
      </div>
    </div>
  )
}

export const Timeline = () => {
  return (
    timelineData.length > 0 && (
      <div className={s.timelineContainer}>
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  )
}
