import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { changeLink } from '@/components/ui/components/breadcrumbs/breadcrumbs-slice.ts'
// import { breadcrumbActions } from '@/components/ui/components/breadcrumbs'
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
const breadcrumbMapping: any = {
  about_search: 'О системе поиска',
  analysis_publications: 'Организации: анализ публикаций',
  analysis_publications_and_keywords: 'Издания: анализ публикаций и ключевых слов',
  analytics: 'Аналитика и визуализация',
  authors: 'Авторы',
  citation: 'Цитирование',
  confidentiality: 'Конфиденциальность',
  contacts: 'Контакты',
  data_search: 'Поиск данных',
  dynamics: 'Динамика публикаций/цитирований',
  index_h: 'Индекс h',
  keyword_network: 'Сеть ключевого слова',
  organizations: 'Организации',
  publications: 'Публикации',
  publications_by_keywords: 'Публикации по ключевым словам',
  scientific_direction: 'Научное направление',
  scientific_field_organizations: 'Научная сфера организации',
}

const rootSubmenuKeys = ['about_search', 'data_search', 'analytics', 'confidentiality', 'contacts']

export const MenuItem = ({ collapsed }: MenuItemProps) => {
  // const { getBreadcrumb } = useActions(breadcrumbActions)
  const [openKeys, setOpenKeys] = useState(['about_search'])
  const dispatch = useDispatch()

  const handleMenuClick = ({ keyPath }: any) => {
    const russianTitles = keyPath.map((key: string) => breadcrumbMapping[key] || key)

    dispatch(changeLink({ path: russianTitles }))
    // getBreadcrumb({ path: russianTitles.reverse() })
  }

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

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
        openKeys={openKeys}
        style={{
          lineHeight: '1 !important',
          width: `${collapsed ? '80px' : '258px'}`,
        }}
      />
    </ConfigProvider>
  )
}
