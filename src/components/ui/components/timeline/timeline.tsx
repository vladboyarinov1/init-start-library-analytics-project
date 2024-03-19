import { useBreadcrumbs } from '@/components/ui/components/sidebar/bread-crumbs.tsx'
import { Author, Campus, DocumentText, IndexH, Printer, Quotes, Science } from '@/icons'

import s from './timeline.module.scss'

const timelineData = [
  { img: <DocumentText size={40} />, link: 'about_search', title: 'Публикации' },
  { img: <Author size={40} />, link: 'publications', title: 'Авторы' },
  { img: <Campus size={40} />, title: 'Организации' },
  { img: <Quotes size={40} />, title: 'Цитирования' },
  { img: <Science size={40} />, title: 'Научное направление' },
  { img: <IndexH size={40} />, title: 'Индекс h' },
  { img: <Printer size={40} />, title: 'Источник публикаций' },
]

const TimelineItem = ({ data }: any) => {
  const { setSelectedKeys } = useBreadcrumbs()

  const onClickHandler = a => {
    setSelectedKeys(a)
  }

  return (
    <div className={s.timelineItem}>
      <div className={s.timelineItemContent}>
        <a
          className={s.timelineItemInfo}
          href={data.link}
          onClick={() => onClickHandler(data.link)}
        >
          <div className={s.img}>{data.img}</div>
          <div className={s.title}>{data.title}</div>
        </a>
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
