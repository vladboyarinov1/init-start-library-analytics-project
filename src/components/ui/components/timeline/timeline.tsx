import { Author, Campus, DocumentText, IndexH, Printer, Quotes, Science } from '@/icons'

import s from './timeline.module.scss'

const timelineData = [
  { img: <DocumentText size={40} />, title: 'Публикации' },
  { img: <Author size={40} />, title: 'Авторы' },
  { img: <Campus size={40} />, title: 'Организации' },
  { img: <Quotes size={40} />, title: 'Организации' },
  { img: <Science size={40} />, title: 'Научное направление' },
  { img: <IndexH size={40} />, title: 'Индекс h' },
  { img: <Printer size={40} />, title: 'Источник публикаций' },
]

const TimelineItem = ({ data }: any) => (
  <div className={s.timelineItem}>
    <div className={s.timelineItemContent}>
      <div className={s.timelineItemInfo}>
        <div className={s.img}>{data.img}</div>
        <div className={s.title}>{data.title}</div>
      </div>
      <span className={s.circle} />
    </div>
  </div>
)

export const Timeline = () =>
  timelineData.length > 0 && (
    <div className={s.timelineContainer}>
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  )
