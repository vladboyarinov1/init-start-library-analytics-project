import { useState } from 'react'

import useScrollPosition from '@/common/hooks/use-scroll-position.ts'
import { Sidebar } from '@/components/ui/components/header/mobile-sidebar/mobile-sidebar.tsx'
import { SidebarLogo } from '@/components/ui/components/sidebar/sidebar-logo'
import { MenuOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

import s from './header.module.scss'

export const MainHeader = () => {
  const [open, setOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const fixedHeader = scrollPosition >= 80

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
