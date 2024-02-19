import { Route, Routes, useLocation } from 'react-router-dom'

import { AboutSearch } from '@/components/ui/about-search'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { MainHeader } from '@/components/ui/header/header'
import { Sidebar } from '@/components/ui/sidebar'
import { useBreadcrumbs } from '@/components/ui/sidebar/bread-crumbs'
import { data } from '@/data'
import { useWindowSize } from '@/hooks/use-window-size'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const { selectedKeys } = useBreadcrumbs()
  const { width } = useWindowSize()
  const location = useLocation()

  // Теперь у вас есть доступ к location.pathname
  const currentPath = location.pathname

  console.log(currentPath)
  const isMobile = width && width <= 730

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        height: isMobile ? '' : '100vh',
      }}
    >
      <Layout
        style={{
          backgroundColor: 'white',
        }}
      >
        {currentPath !== '/about_search' ? isMobile ? <MainHeader /> : <Sidebar /> : ''}
        <Layout
          style={{
            backgroundColor: 'var(--color-green-desaturated)',
            marginTop: `${isMobile && currentPath !== '/about_search' ? '60px' : 0}`,
            overflowY: 'auto',
          }}
        >
          <Content
            style={{
              margin: '0 20px',
            }}
          >
            {currentPath !== '/about_search' ? (
              <Breadcrumb
                items={selectedKeys.map(i => ({ title: i }))}
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
