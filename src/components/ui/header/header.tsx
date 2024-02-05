import { useState } from 'react'

import { Sidebar } from '@/components/ui/header/mobile-sidebar/mobile-sidebar'
import { MenuOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

export const MainHeader = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <Header
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'end',
        // position: 'fixed',
        width: '100%',
      }}
    >
      <MenuOutlined onClick={handleOpen} />
      <Sidebar handleClose={handleClose} isDark={false} open={open} width />
    </Header>
  )
}
