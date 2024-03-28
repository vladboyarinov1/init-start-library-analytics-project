import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { changeLink } from '@/components/ui/components/breadcrumbs/breadcrumbs-slice'
import { TimelineCell } from '@/components/ui/pages/presentation-page/presentation-page'

import s from './timeline.module.scss'

const TimelineItem = ({ breadcrumbs, img, link, title }: TimelineCell) => {
  const dispatch = useDispatch()
  const onClickHandler = (path: string[]) => {
    dispatch(changeLink({ path }))
  }

  return (
    <div className={s.timelineItem}>
      <div className={s.timelineItemContent}>
        <Link className={s.timelineItemInfo} onClick={() => onClickHandler(breadcrumbs)} to={link}>
          <div className={s.img}>{img}</div>
          <div className={s.title}>{title}</div>
        </Link>
        <span className={s.circle} />
      </div>
    </div>
  )
}

type TimelineProps = {
  items: TimelineCell[]
}
export const Timeline = (props: TimelineProps) => {
  const { items } = props

  return (
    items.length && (
      <div className={s.timelineContainer}>
        {items.map((i: TimelineCell) => (
          <TimelineItem
            breadcrumbs={i.breadcrumbs}
            img={i.img}
            key={i.title}
            link={i.link}
            title={i.title}
          />
        ))}
        {/*{timelineData.map((props, idx) => (*/}
        {/*  <TimelineItem data={props} key={idx} />*/}
        {/*))}*/}
      </div>
    )
  )
}
