import { useState } from 'react'

import { MenuItem } from '@/components/ui/sidebar/menu-item'
import { Layout } from 'antd'

import s from './sidebar.module.scss'

const { Sider } = Layout

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider className={s.sidebar} collapsed={collapsed} collapsible trigger={null} width={256}>
      <MenuItem collapsed={collapsed} setCollapsed={setCollapsed} />
    </Sider>
  )
}
