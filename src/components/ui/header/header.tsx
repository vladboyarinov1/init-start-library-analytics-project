import { useState } from 'react'

import { Sidebar } from '@/components/ui/header/mobile-sidebar/mobile-sidebar'
import { SidebarLogo } from '@/components/ui/sidebar/sidebar-logo'
import useScrollPosition from '@/hooks/use-scroll-position'
import { MenuOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

import s from './header.module.scss'

export const MainHeader = () => {
  const [open, setOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const fixedHeader = scrollPosition >= 40

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <Header
      className={s.header}
      style={{
        backgroundColor: `${fixedHeader ? 'transparent' : 'white'}`,
      }}
    >
      {<SidebarLogo visible={!fixedHeader} />}
      <MenuOutlined className={s.burgerIcon} onClick={handleOpen} />
      <Sidebar handleClose={handleClose} isDark={false} open={open} width />
    </Header>
  )
}
