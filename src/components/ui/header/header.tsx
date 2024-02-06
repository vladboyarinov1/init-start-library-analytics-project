import { useState } from 'react'

import { Sidebar } from '@/components/ui/header/mobile-sidebar/mobile-sidebar'
import { SidebarLogo } from '@/components/ui/sidebar/sidebar-logo/sidebar-logo'
import useScrollPosition from '@/hooks/use-scroll-position'
import { MenuOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

export const MainHeader = () => {
  const [open, setOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const fixedHeader = scrollPosition >= 80

  console.log(fixedHeader)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <Header
      style={{
        backgroundColor: `${fixedHeader ? 'transparent' : 'white'}`,
        display: 'flex',
        justifyContent: `${fixedHeader ? 'space-around' : 'space-around'}`,
        padding: `${fixedHeader ? '0' : '16px'}`,
        position: `${fixedHeader ? 'fixed' : 'relative'}`,
        transition: 'background-color 0.2s, padding 0.2s, position 0.2s',
        width: '100%',
        zIndex: 2,
      }}
    >
      {<SidebarLogo visible={!fixedHeader} />}
      <MenuOutlined onClick={handleOpen} style={{ fontSize: 20, zIndex: '2' }} />
      <Sidebar handleClose={handleClose} isDark={false} open={open} width />
    </Header>
  )
}
