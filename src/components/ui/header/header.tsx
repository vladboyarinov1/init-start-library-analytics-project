import { useState } from 'react'

import { Sidebar } from '@/components/ui/header/mobile-sidebar/mobile-sidebar'
import { MenuOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

export const MainHeader = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <Header style={{ backgroundColor: 'snow' }}>
      <MenuOutlined onClick={handleOpen} />
      <Sidebar handleClose={handleClose} isDark={false} open={open} width />
    </Header>
  )
}
