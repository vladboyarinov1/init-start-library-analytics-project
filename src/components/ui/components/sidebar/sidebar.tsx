import { useState } from 'react'

import { MenuItem } from '@/components/ui/components/sidebar/menu-item'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'

import s from './sidebar.module.scss'

import { SidebarLogo } from './sidebar-logo'

const { Sider } = Layout

type SidebarProps = {
  collapsed: boolean
  setCollapsed: any
}
export const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const [_logoVisible, setLogoVisible] = useState(true)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setTimeout(() => setLogoVisible(!collapsed), collapsed ? 300 : 0)
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '0 10px 10px 0',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
        left: 0,
        overflow: 'auto',
        position: 'fixed',
        top: 0,
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
        <Sider
          className={s.sidebar}
          collapsed={collapsed}
          collapsible
          theme={'light'}
          trigger={null}
          width={256}
        >
          <MenuItem collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>
      </div>
      {!collapsed && <div className={s.bottomText}>Анализ данных научных публикаций</div>}
    </div>
  )
}
