import { useEffect, useState } from 'react'

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
import { SystemSearch } from '@/icons/components/system-search.tsx'
import { CloseOutlined } from '@ant-design/icons'
import { ConfigProvider, Menu, MenuProps } from 'antd'

import s from './Sidebar.module.scss'

type PropsType = {
  handleClose: () => void
  isDark: boolean
  open: boolean
  width: boolean
}
type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    children,
    icon,
    key,
    label,
    type,
  } as MenuItem
}
const items: MenuItem[] = [
  getItem('О системе поиска', 'sub1', <SystemSearch />),
  getItem('Поиск данных', 'sub2', <SearchSquare />, [
    getItem('Публикации', '3', <AnalyticsGraph />),
    getItem('Авторы', '4', <Author />),
    getItem('Организации', '5', <Campus />),
    getItem('Цитирование', '6', <Quotes />),
    getItem('Научное направление', '7', <Science />),
    getItem('Индекс h', '8', <IndexH />),
  ]),
  getItem('Аналитика и визуализация', 'sub4', <AnalyticsGraph />, [
    getItem('Организации: анализ публикаций', '9', <Bubbles />),
    getItem('Динамика публикаций/цитирований', '10', <AnalyticsChart />),
    getItem('Издания: анализ публикаций и ключевых слов', '11', <List />),
    getItem('Публикации по ключевым словам', '12', <DocumentText />),
    getItem('Сеть ключевого слова', '12', <MdAnalistics />),
    getItem('Научная сфера организации', '13', <AtomicScience />),
  ]),
  getItem('Конфиденциальность', 'sub5', <ProtectedDirectory />),
  getItem('Контакты', 'sub6', <Contacts />),
]

export const Sidebar = ({ handleClose, open }: PropsType) => {
  const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden')
    !open && (document.body.style.overflow = 'unset')
  }, [open]) // отключает прокрутку при открытом меню

  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorPrimary: 'var(--color-green-primary)',
              colorText: 'var(--color-black-60)',
              itemActiveBg: 'var(--color-green-desaturated)',
              itemSelectedBg: 'var(--color-green-desaturated)',
            },
          },
        }}
      >
        <aside className={sidebarClass}>
          <button className={open ? s.close : s.closeNotOpen} onClick={handleClose}>
            <CloseOutlined />
          </button>
          <Menu items={items} mode={'inline'} onOpenChange={onOpenChange} openKeys={openKeys} />
        </aside>
      </ConfigProvider>
    </>
  )
}
