import { useState } from 'react'

import { Footer } from '@/components/ui/components/footer'
import { Sidebar } from '@/components/ui/components/header/mobile-sidebar/mobile-sidebar'
import { Timeline } from '@/components/ui/components/timeline'
import { BurgerMenu, Logo } from '@/icons'

import s from './data-search.module.scss'

export type TimelineCell = {
  breadcrumbs: string[]
  img: any
  link: string
  title: string
}
type PresentationPage = {
  timelineItems: TimelineCell[]
  title: string
}

export const DataSearch = ({ timelineItems, title }: PresentationPage) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <div>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.logo}>
            <Logo size={90} />
          </div>
          <div className={s.menu}>
            <div className={s.menuImg} onClick={handleOpen}>
              <BurgerMenu size={30} />
            </div>
            <Sidebar handleClose={handleClose} isDark open={open} width />
          </div>
          <div />
        </div>
        <div className={s.title}>
          {/*<h2>Наукометрические показатели</h2>*/}
          <h2>{title}</h2>
        </div>
      </header>
      <Timeline items={timelineItems} />
      <Footer />
    </div>
  )
}
