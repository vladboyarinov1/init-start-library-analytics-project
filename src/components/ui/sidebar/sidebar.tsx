import { useState } from 'react'

import { MenuItem } from '@/components/ui/sidebar/menu-item'
import { Layout } from 'antd'

import s from './sidebar.module.scss'

const { Sider } = Layout

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ backgroundColor: 'var(--color-green-desaturated)' }}>
      <Sider className={s.sidebar} collapsed={collapsed} collapsible trigger={null}>
        <MenuItem collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
    </Layout>
  )
}
