import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import { useBreadcrumbs } from '@/components/ui/sidebar/bread-crumbs'
import {
  AnalyticsChart,
  AnalyticsGraph,
  AtomicScience,
  Author,
  Bubbles,
  Campus,
  Contacts,
  DocumentText,
  IndexH,
  List,
  MdAnalistics,
  ProtectedDirectory,
  Quotes,
  Science,
  SearchSquare,
} from '@/icons'
import { SystemSearch } from '@/icons/components/system-search'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Menu } from 'antd'

import s from './menu-item.module.scss'

import { SidebarLogo } from '../sidebar-logo/sidebar-logo'

type MenuItemProps = {
  collapsed: boolean
  setCollapsed: any
}

const menuData = [
  {
    icon: <SystemSearch />,
    key: 'about_search',
    label: 'О системе поиска',
  },
  {
    icon: <SearchSquare />,
    key: 'data_search',
    label: 'Поиск данных',
    submenu: [
      { icon: <AnalyticsGraph />, key: 'publications', label: 'Публикации' },
      { icon: <Author />, key: 'authors', label: 'Авторы' },
      { icon: <Campus />, key: 'organizations', label: 'Организации' },
      { icon: <Quotes />, key: 'citation', label: 'Цитирование' },
      { icon: <Science />, key: 'scientific_direction', label: 'Научное направление' },
      { icon: <IndexH />, key: 'index_h', label: 'Индекс h' },
    ],
  },
  {
    icon: <AnalyticsGraph />,
    key: 'analytics',
    label: 'Аналитика и визуализация',
    submenu: [
      { icon: <Bubbles />, key: 'analysis_publications', label: 'Организации: анализ публикаций' },
      { icon: <AnalyticsChart />, key: 'dynamics', label: 'Динамика публикаций/цитирований' },
      {
        icon: <List />,
        key: 'analysis_publications_and_keywords',
        label: 'Издания: анализ публикаций и ключевых слов',
      },
      {
        icon: <DocumentText />,
        key: 'publications_by_keywords',
        label: 'Публикации по ключевым словам',
      },
      { icon: <MdAnalistics />, key: 'keyword_network', label: 'Сеть ключевого слова' },
      {
        icon: <AtomicScience />,
        key: 'scientific_field_organizations',
        label: 'Научная сфера организации',
      },
    ],
  },
  {
    icon: <ProtectedDirectory />,
    key: 'confidentiality',
    label: 'Конфиденциальность',
  },
  {
    icon: <Contacts />,
    key: 'contacts',
    label: 'Контакты',
  },
]

export const MenuItem = ({ collapsed, setCollapsed }: MenuItemProps) => {
  const [_logoVisible, setLogoVisible] = useState(true)
  const { setSelectedKeys } = useBreadcrumbs()

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setTimeout(() => setLogoVisible(!collapsed), collapsed ? 300 : 0)
  }
  const handleMenuClick = ({ keyPath }: any) => {
    setSelectedKeys(keyPath.reverse())
  }

  const menuItemStyle: React.CSSProperties | undefined = !collapsed
    ? {
        height: 'auto',
        lineHeight: '1.3',
        padding: '5px 10px 5px 25px',
        whiteSpace: 'normal',
      }
    : undefined

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            collapsedWidth: 80,
            colorPrimary: 'var(--color-green-primary)',
            colorText: 'var(--color-black-60)',
            itemActiveBg: 'var(--color-green-desaturated)',
            itemSelectedBg: 'var(--color-green-desaturated)',
          },
        },
      }}
    >
      <Menu
        className={s.menu_bar}
        mode={'inline'}
        onClick={handleMenuClick}
        style={{ width: `${collapsed ? '80px' : '256px'}` }}
      >
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

        {menuData.map(menuItem => (
          <Fragment key={menuItem.key}>
            {menuItem.submenu ? (
              <Menu.SubMenu
                className={s.menu_item}
                icon={menuItem.icon}
                key={menuItem.label}
                title={menuItem.label}
              >
                {menuItem.submenu.map(subItem => (
                  <Menu.Item
                    className={s.menu_item}
                    icon={subItem.icon}
                    key={subItem.label}
                    style={
                      !collapsed
                        ? {
                            height: 'auto',
                            lineHeight: 1.3,
                            padding: '7px 0 7px 40px',
                            whiteSpace: 'normal',
                          }
                        : {}
                    }
                  >
                    <Link to={`/${subItem.key}`}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                className={s.menu_item}
                icon={menuItem.icon}
                key={menuItem.label}
                style={menuItemStyle}
              >
                <Link to={`/${menuItem.key}`}>{menuItem.label}</Link>
              </Menu.Item>
            )}
          </Fragment>
        ))}
      </Menu>
    </ConfigProvider>
  )
}
