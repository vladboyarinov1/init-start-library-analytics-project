import { useState } from 'react'
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
import { ConfigProvider, Menu, MenuProps } from 'antd'

import s from './menu-item.module.scss'

type MenuItemProps = {
  collapsed: boolean
  setCollapsed: any
}
type MenuItemType = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItemType[],
  type?: 'group'
): MenuItemType {
  return {
    children,
    icon,
    key,
    label,
    type,
  } as MenuItemType
}

const items: MenuItemType[] = [
  getItem(<Link to={'about_search'}>О системе поиска</Link>, 'about_search', <SystemSearch />),
  getItem('Поиск данных', 'data_search', <SearchSquare />, [
    getItem(<Link to={'publications'}>Публикации</Link>, 'publications', <AnalyticsGraph />),
    getItem(<Link to={'authors'}>Авторы</Link>, 'authors', <Author />),
    getItem(<Link to={'organizations'}>Организации</Link>, 'organizations', <Campus />),
    getItem(<Link to={'citation'}>Цитирование</Link>, 'citation', <Quotes />),
    getItem(
      <Link to={'scientific_direction'}>Научное направление</Link>,
      'scientific_direction',
      <Science />
    ),
    getItem(<Link to={'index_h'}>Индекс h</Link>, 'index_h', <IndexH />),
  ]),
  getItem('Аналитика и визуализация', 'analytics', <AnalyticsGraph />, [
    getItem(
      <Link to={'analysis_publications'}>Организации: анализ публикаций</Link>,
      'analysis_publications',
      <Bubbles />
    ),
    getItem(
      <Link to={'dynamics'}>Динамика публикаций/цитирований</Link>,
      'dynamics',
      <AnalyticsChart />
    ),
    getItem(
      <Link to={'analysis_publications_and_keywords'}>
        Издания: анализ публикаций и ключевых слов
      </Link>,
      'analysis_publications_and_keywords',
      <List />
    ),
    getItem(
      <Link to={'publications_by_keywords'}>Публикации по ключевым словам</Link>,
      'publications_by_keywords',
      <DocumentText />
    ),
    getItem(
      <Link to={'keyword_network'}>Сеть ключевого слова</Link>,
      'keyword_network',
      <MdAnalistics />
    ),
    getItem(
      <Link to={'scientific_field_organizations'}>Научная сфера организации</Link>,
      'scientific_field_organizations',
      <AtomicScience />
    ),
  ]),
  getItem(
    <Link to={'confidentiality'}>Конфиденциальность</Link>,
    'confidentiality',
    <ProtectedDirectory />
  ),
  getItem(<Link to={'contacts'}>Контакты</Link>, 'contacts', <Contacts />),
]

export const MenuItem = ({ collapsed }: MenuItemProps) => {
  const { setSelectedKeys } = useBreadcrumbs()

  const handleMenuClick = ({ keyPath }: any) => {
    setSelectedKeys(keyPath.reverse())
  }
  const [openKeys, setOpenKeys] = useState(['about_search'])

  const rootSubmenuKeys = [
    'about_search',
    'data_search',
    'analytics',
    'confidentiality',
    'contacts',
  ]
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    console.log(latestOpenKey)

    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  // const menuItemStyle: React.CSSProperties | undefined = !collapsed
  //   ? {
  //       height: 'auto',
  //       lineHeight: '1.3',
  //       padding: '5px 10px 5px 25px',
  //       whiteSpace: 'normal',
  //     }
  //   : undefined

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
        items={items}
        mode={'inline'}
        onClick={handleMenuClick}
        onOpenChange={onOpenChange}
        style={{
          width: `${collapsed ? '80px' : '256px'}`,
        }}
      />
    </ConfigProvider>
  )
}

// import { Fragment, useState } from 'react'
// import { Link } from 'react-router-dom'
//
// import { useBreadcrumbs } from '@/components/ui/sidebar/bread-crumbs'
// import {
//   AnalyticsChart,
//   AnalyticsGraph,
//   AtomicScience,
//   Author,
//   Bubbles,
//   Campus,
//   Contacts,
//   DocumentText,
//   IndexH,
//   List,
//   MdAnalistics,
//   ProtectedDirectory,
//   Quotes,
//   Science,
//   SearchSquare,
// } from '@/icons'
// import { SystemSearch } from '@/icons/components/system-search'
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
// import { Button, ConfigProvider, Menu } from 'antd'
//
// import s from './menu-item.module.scss'
//
// import { SidebarLogo } from '../sidebar-logo/sidebar-logo'
//
// type MenuItemProps = {
//   collapsed: boolean
//   setCollapsed: any
// }
//
// const menuData = [
//   {
//     icon: <SystemSearch />,
//     key: 'about_search',
//     label: 'О системе поиска',
//   },
//   {
//     icon: <SearchSquare />,
//     key: 'data_search',
//     label: 'Поиск данных',
//     submenu: [
//       { icon: <AnalyticsGraph />, key: 'publications', label: 'Публикации' },
//       { icon: <Author />, key: 'authors', label: 'Авторы' },
//       { icon: <Campus />, key: 'organizations', label: 'Организации' },
//       { icon: <Quotes />, key: 'citation', label: 'Цитирование' },
//       { icon: <Science />, key: 'scientific_direction', label: 'Научное направление' },
//       { icon: <IndexH />, key: 'index_h', label: 'Индекс h' },
//     ],
//   },
//   {
//     icon: <AnalyticsGraph />,
//     key: 'analytics',
//     label: 'Аналитика и визуализация',
//     submenu: [
//       { icon: <Bubbles />, key: 'analysis_publications', label: 'Организации: анализ публикаций' },
//       { icon: <AnalyticsChart />, key: 'dynamics', label: 'Динамика публикаций/цитирований' },
//       {
//         icon: <List />,
//         key: 'analysis_publications_and_keywords',
//         label: 'Издания: анализ публикаций и ключевых слов',
//       },
//       {
//         icon: <DocumentText />,
//         key: 'publications_by_keywords',
//         label: 'Публикации по ключевым словам',
//       },
//       { icon: <MdAnalistics />, key: 'keyword_network', label: 'Сеть ключевого слова' },
//       {
//         icon: <AtomicScience />,
//         key: 'scientific_field_organizations',
//         label: 'Научная сфера организации',
//       },
//     ],
//   },
//   {
//     icon: <ProtectedDirectory />,
//     key: 'confidentiality',
//     label: 'Конфиденциальность',
//   },
//   {
//     icon: <Contacts />,
//     key: 'contacts',
//     label: 'Контакты',
//   },
// ]
//
// export const MenuItem = ({ collapsed, setCollapsed }: MenuItemProps) => {
//   const [_logoVisible, setLogoVisible] = useState(true)
//   const { setSelectedKeys } = useBreadcrumbs()
//
//   const toggleSidebar = () => {
//     setCollapsed(!collapsed)
//     setTimeout(() => setLogoVisible(!collapsed), collapsed ? 300 : 0)
//   }
//   const handleMenuClick = ({ keyPath }: any) => {
//     setSelectedKeys(keyPath.reverse())
//   }
//
//   const menuItemStyle: React.CSSProperties | undefined = !collapsed
//     ? {
//         height: 'auto',
//         lineHeight: '1.3',
//         padding: '5px 10px 5px 25px',
//         whiteSpace: 'normal',
//       }
//     : undefined
//
//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Menu: {
//             collapsedWidth: 80,
//             colorPrimary: 'var(--color-green-primary)',
//             colorText: 'var(--color-black-60)',
//             itemActiveBg: 'var(--color-green-desaturated)',
//             itemSelectedBg: 'var(--color-green-desaturated)',
//           },
//         },
//       }}
//     >
//       <Menu
//         className={s.menu_bar}
//         mode={'inline'}
//         onClick={handleMenuClick}
//         style={{
//           width: `${collapsed ? '80px' : '256px'}`,
//         }}
//       >
//         <div className={s.logo_button}>
//           <div>
//             <Button
//               className={collapsed ? s.toggle : ''}
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={toggleSidebar}
//               type={'text'}
//             />
//           </div>
//           <div> {!collapsed && <SidebarLogo />}</div>
//         </div>
//
//         {menuData.map(menuItem => (
//           <Fragment key={menuItem.key}>
//             {menuItem.submenu ? (
//               <Menu.SubMenu
//                 className={s.menu_item}
//                 icon={menuItem.icon}
//                 key={menuItem.label}
//                 title={menuItem.label}
//               >
//                 {menuItem.submenu.map(subItem => (
//                   <Menu.Item
//                     className={s.menu_item}
//                     icon={subItem.icon}
//                     key={subItem.label}
//                     style={
//                       !collapsed
//                         ? {
//                             height: 'auto',
//                             lineHeight: 1.3,
//                             padding: '7px 0 7px 40px',
//                             whiteSpace: 'normal',
//                           }
//                         : {}
//                     }
//                   >
//                     <Link to={`/${subItem.key}`}>{subItem.label}</Link>
//                   </Menu.Item>
//                 ))}
//               </Menu.SubMenu>
//             ) : (
//               <Menu.Item
//                 className={s.menu_item}
//                 icon={menuItem.icon}
//                 key={menuItem.label}
//                 style={menuItemStyle}
//               >
//                 <Link to={`/${menuItem.key}`}>{menuItem.label}</Link>
//               </Menu.Item>
//             )}
//           </Fragment>
//         ))}
//       </Menu>
//     </ConfigProvider>
//   )
// }
