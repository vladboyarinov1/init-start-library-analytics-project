import { useState } from 'react'

import { MenuItem } from '@/components/ui/components/sidebar/menu-item'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'

import s from './sidebar.module.scss'

import { SidebarLogo } from './sidebar-logo'

const { Sider } = Layout

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [_logoVisible, setLogoVisible] = useState(true)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setTimeout(() => setLogoVisible(!collapsed), collapsed ? 300 : 0)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div className={s.logo_button}>
          <div>
            <Button
              className={collapsed ? s.toggle : ''}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleSidebar}
              type={'text'}
            />
          </div>
          <div> {!collapsed && <SidebarLogo />}</div>
        </div>
        <Sider className={s.sidebar} collapsed={collapsed} collapsible trigger={null} width={256}>
          <MenuItem collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>
      </div>
      {!collapsed && <div className={s.bottomText}>Анализ данных научных публикаций</div>}
    </div>
  )
}
