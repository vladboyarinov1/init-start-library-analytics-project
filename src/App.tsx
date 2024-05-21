import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { searchPageData, visualizationData } from '@/common/data'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { useWindowSize } from '@/common/hooks/use-window-size'
import { PagesFooter } from '@/components/ui/components/footer'
import { MainHeader } from '@/components/ui/components/header/header'
import { Sidebar } from '@/components/ui/components/sidebar'
import { AboutSearch } from '@/components/ui/pages/about-search'
import { EditionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/ui'
import { KeywordNetwork } from '@/components/ui/pages/keyword-network'
import { PresentationPage } from '@/components/ui/pages/presentation-page/presentation-page'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const url = useAppSelector(state => state.breadCrumbs.breadcrumbPath)

  const { width } = useWindowSize()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const currentPath = location.pathname
  const isMobile = width && width <= 730
  const isPathNotInSearchPages =
    currentPath !== '/about_search' &&
    currentPath !== '/data_search' &&
    currentPath !== '/visualization'

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        minHeight: '100vh',
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
          marginTop: `${isMobile && isPathNotInSearchPages ? '30px' : 0}`,
          // overflowY: 'auto',
        }}
      >
        <Content style={{ flex: '1 0 auto', overflow: 'initial' }}>
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
        {isPathNotInSearchPages && <PagesFooter />}
      </Layout>
    </Layout>
  )
}
