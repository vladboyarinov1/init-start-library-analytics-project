import { useState } from 'react'

import { SidebarLogo } from '@/components/ui/sidebar/sidebar-logo'
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

type MenuItemProps = {
  collapsed: boolean
  setCollapsed: any
}

export const MenuItem = ({ collapsed, setCollapsed }: MenuItemProps) => {
  const [logoVisible, setLogoVisible] = useState(true)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    setTimeout(() => setLogoVisible(!collapsed), collapsed ? 300 : 0)
  }

  const menuItemStyle: React.CSSProperties | undefined = !collapsed
    ? {
        height: 'auto',
        lineHeight: '1.3',
        padding: '5px 10px 5px 48px',
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
        <Menu.Item className={s.menu_item} icon={<SystemSearch />} key={'about_search'}>
          О системе поиска
        </Menu.Item>
        <Menu.SubMenu
          className={s.menu_item}
          icon={<SearchSquare />}
          key={'data_search'}
          title={'Поиск данных'}
        >
          <Menu.Item className={s.menu_item} icon={<AnalyticsGraph />} key={'publications'}>
            Публикации
          </Menu.Item>
          <Menu.Item className={s.menu_item} icon={<Author />} key={'authors'}>
            Авторы
          </Menu.Item>
          <Menu.Item className={s.menu_item} icon={<Campus />} key={'organizations'}>
            Организации
          </Menu.Item>
          <Menu.Item className={s.menu_item} icon={<Quotes />} key={'citation'}>
            Цитирование
          </Menu.Item>
          <Menu.Item className={s.menu_item} icon={<Science />} key={'scientific_direction'}>
            Научное направление
          </Menu.Item>
          <Menu.Item className={s.menu_item} icon={<IndexH />} key={'index_h'}>
            Индекс h
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          className={s.menu_item}
          icon={<AnalyticsGraph />}
          key={'analytics'}
          title={'Аналитика и визуализация'}
        >
          <Menu.Item
            className={s.menu_item}
            icon={<Bubbles />}
            key={'analysis_publications'}
            style={menuItemStyle}
          >
            Организации: анализ публикаций
          </Menu.Item>
          <Menu.Item
            className={s.menu_item}
            icon={<AnalyticsChart />}
            key={'dynamics'}
            style={menuItemStyle}
          >
            Динамика публикаций/цитирований
          </Menu.Item>
          <Menu.Item
            className={s.menu_item}
            icon={<List />}
            key={'analysis_publications_and_keywords'}
            style={menuItemStyle}
          >
            Издания: анализ публикаций и ключевых слов
          </Menu.Item>
          <Menu.Item
            className={s.menu_item}
            icon={<DocumentText />}
            key={'publications_by_keywords'}
            style={menuItemStyle}
          >
            Публикации по ключевым словам
          </Menu.Item>
          <Menu.Item
            className={s.menu_item}
            icon={<MdAnalistics />}
            key={'keyword_network'}
            style={menuItemStyle}
          >
            Сеть ключевого слова
          </Menu.Item>
          <Menu.Item
            className={s.menu_item}
            icon={<AtomicScience />}
            key={'scientific_field_organizations'}
            style={menuItemStyle}
          >
            Научная сфера организации
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item className={s.menu_item} icon={<ProtectedDirectory />} key={'confidentiality'}>
          Конфиденциальность
        </Menu.Item>
        <Menu.Item className={s.menu_item} icon={<Contacts />} key={'contacts'}>
          Контакты
        </Menu.Item>
      </Menu>
    </ConfigProvider>
  )
}
