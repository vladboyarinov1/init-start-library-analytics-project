import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { MainHeader } from '@/components/ui/components/header/header'
import { Sidebar } from '@/components/ui/components/sidebar'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { AboutSearch } from '@/components/ui/pages/about-search'
import { DataSearch } from '@/components/ui/pages/data-search'
import { TimelineCell } from '@/components/ui/pages/data-search/data-search.tsx'
import { data } from '@/data'
import { useAppSelector } from '@/hooks/use-app-selector'
import { useWindowSize } from '@/hooks/use-window-size'
import { Author, Campus, DocumentText, IndexH, Printer, Quotes, Science } from '@/icons'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

const ScientometricIndicators: TimelineCell[] = [
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

export function App() {
  const { width } = useWindowSize()
  const location = useLocation()

  const currentPath = location.pathname

  const isMobile = width && width <= 730
  const url = useAppSelector(state => state.breadCrumbs.breadcrumbPath)

  console.log(currentPath)

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        // height: isMobile ? '' : '100vh',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <Layout
        style={{
          backgroundColor: 'white',
        }}
      >
        {currentPath !== '/about_search' && currentPath !== '/data_search' ? (
          isMobile ? (
            <MainHeader />
          ) : (
            <Sidebar />
          )
        ) : null}
        <Layout
          style={{
            backgroundColor: 'var(--color-green-desaturated)',
            marginTop: `${
              isMobile && currentPath !== '/about_search' && currentPath !== '/data_search'
                ? '60px'
                : 0
            }`,
            overflowY: 'auto',
          }}
        >
          <Content
          // style={{
          //   margin: '0 20px',
          // }}
          >
            {currentPath !== '/about_search' && currentPath !== '/data_search' ? (
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
            <div
            // style={{
            //   background: 'white',
            //   borderRadius: 16,
            //   minHeight: 360,
            //   padding: 21,
            // }}
            >
              <Routes>
                <Route element={<AboutSearch />} path={'/about_search'} />
                <Route
                  element={
                    <DataSearch
                      timelineItems={ScientometricIndicators}
                      title={'Наукометрические показатели'}
                    />
                  }
                  path={'/data_search'}
                />
                <Route element={<Navigate to={'/about_search'} />} path={'/'} />
                <Route
                  element={
                    <div>
                      <LineGraph data={data} isTooltip legend variant={'linear'} />
                    </div>
                  }
                  path={'/publications'}
                />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
