import { Route, Routes } from 'react-router-dom'

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
        {isMobile ? <MainHeader /> : <Sidebar />}
        <Layout
          style={{
            backgroundColor: 'var(--color-green-desaturated)',
            marginTop: `${isMobile ? '60px' : 0}`,
            overflowY: 'auto',
          }}
        >
          <Content
            style={{
              margin: '0 20px',
            }}
          >
            <Breadcrumb
              items={selectedKeys.map(i => ({ title: i }))}
              separator={'>'}
              style={{
                fontSize: 16,
                margin: '40px 0 20px 20px',
              }}
            />
            <div
              style={{
                background: 'white',
                borderRadius: 16,
                minHeight: 360,
                padding: 21,
              }}
            >
              <Routes>
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
