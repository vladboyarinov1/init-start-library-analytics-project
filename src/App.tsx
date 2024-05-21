import React, { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/common/hooks/use-app-selector'
import { useWindowSize } from '@/common/hooks/use-window-size'
import { MainHeader } from '@/components/ui/components/header/header'
import { Sidebar } from '@/components/ui/components/sidebar'
import { AboutSearch } from '@/components/ui/pages/about-search'
import { EditionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/ui'
import { KeywordNetwork } from '@/components/ui/pages/keyword-network'
import {
  PresentationPage,
  TimelineCell,
} from '@/components/ui/pages/presentation-page/presentation-page'
import {
  AnalyticsChart,
  AtomicScience,
  Author,
  Bubbles,
  Campus,
  DocumentText,
  IndexH,
  Printer,
  Quotes,
  Science,
  SearchBook,
  TransparentDoc,
} from '@/icons'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer } from 'antd/es/layout/layout'

const searchPageData: TimelineCell[] = [
  {
    breadcrumbs: ['Поиск данных', 'Публикации'],
    img: <DocumentText size={40} />,
    link: '/publications',
    title: 'Публикации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Авторы'],
    img: <Author size={40} />,
    link: '/authors',
    title: 'Авторы',
  },
  {
    breadcrumbs: ['Поиск данных', 'Организации'],
    img: <Campus size={40} />,
    link: '/organizations',
    title: 'Организации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Цитирования'],
    img: <Quotes size={40} />,
    link: '/citation',
    title: 'Цитирования',
  },
  {
    breadcrumbs: ['Поиск данных', 'Научное направление'],
    img: <Science size={40} />,
    link: '/scientific_direction',
    title: 'Научное направление',
  },
  {
    breadcrumbs: ['Поиск данных', 'Индекс h'],
    img: <IndexH size={40} />,
    link: '/index_h',
    title: 'Индекс h',
  },
  {
    breadcrumbs: ['Поиск данных', 'Источник публикаций(Уточнить)'],
    img: <Printer size={40} />,
    link: '/source_publications',
    title: 'Источник публикаций(Уточнить)',
  },
]
const visualizationData: TimelineCell[] = [
  {
    breadcrumbs: ['Аналитика и визуализация', 'Организации: анализ публикаций'],
    img: <Campus size={40} />,
    link: '/analysis_publications',
    title: 'Организации: анализ публикаций',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Динамика публикаций/цитирований'],
    img: <AnalyticsChart size={40} />,
    link: '/dynamics',
    title: 'Динамика публикаций/цитирований',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Издания: анализ публикаций и ключевых слов'],
    img: <SearchBook size={40} />,
    link: '/analysis_publications_and_keywords',
    title: 'Издания: анализ публикаций и ключевых слов',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Публикации по ключевым словам'],
    img: <TransparentDoc size={40} />,
    link: '/publications_by_keywords',
    title: 'Публикации по ключевым словам',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Сеть ключевого слова'],
    img: <Bubbles size={40} />,
    link: '/keyword_network',
    title: 'Сеть ключевого слова',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Научная сфера организации'],
    img: <AtomicScience size={40} />,
    link: '/scientific_field_organizations',
    title: 'Научная сфера организации',
  },
]

export function App() {
  const url = useAppSelector(state => state.breadCrumbs.breadcrumbPath)

  const { width } = useWindowSize()
  const location = useLocation()

  const currentPath = location.pathname
  const isMobile = width && width <= 730
  const isPathNotInSearchPages =
    currentPath !== '/about_search' &&
    currentPath !== '/data_search' &&
    currentPath !== '/visualization'
  const [collapsed, setCollapsed] = useState(false)

  console.log(isMobile + '-isModile', collapsed)

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        // height: isMobile ? '' : '100vh',
        // minHeight: '100vh',
      }}
    >
      {isPathNotInSearchPages ? (
        isMobile ? (
          <MainHeader />
        ) : (
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        )
      ) : null}
      <Layout
        style={{
          backgroundColor: 'var(--color-green-desaturated)',
          marginLeft: `${
            isMobile ? '0' : collapsed ? '80px' : !isPathNotInSearchPages ? '0' : '250px'
          }`,
          marginTop: `${isMobile && isPathNotInSearchPages ? '60px' : 0}`,
          // overflowY: 'auto',
        }}
      >
        <Content style={{ minHeight: '100vh', overflow: 'initial' }}>
          {isPathNotInSearchPages ? (
            <Breadcrumb
              items={url.map((i: string) => ({ title: i }))}
              separator={'>'}
              style={{
                fontSize: 16,
                margin: '40px 0 20px 20px',
              }}
            />
          ) : (
            ''
          )}
          <div>
            <Routes>
              <Route element={<AboutSearch />} path={'/about_search'} />
              <Route
                element={
                  <PresentationPage
                    timelineItems={searchPageData}
                    title={'Наукометрические показатели'}
                  />
                }
                path={'/data_search'}
              />
              <Route
                element={
                  <PresentationPage
                    timelineItems={visualizationData}
                    title={'Аналитика и визуализация'}
                  />
                }
                path={'/visualization'}
              />

              <Route element={<Navigate to={'/about_search'} />} path={'/'} />
              <Route
                element={<EditionsPubKeyAnalysisApi />}
                path={'/analysis_publications_and_keywords'}
              />
              <Route element={<KeywordNetwork />} path={'/keyword_network'} />
            </Routes>
          </div>
        </Content>
        {isPathNotInSearchPages && (
          <Footer style={{ backgroundColor: 'yellowgreen', textAlign: 'center' }}>
            dwadadawda
          </Footer>
        )}
      </Layout>
    </Layout>
  )
}
// style={{ margin: '24px 16px 0', minHeight: '100vh', overflow: 'initial' }}
