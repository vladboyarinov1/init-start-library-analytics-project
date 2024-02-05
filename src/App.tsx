import { Route, Routes } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { MainHeader } from '@/components/ui/header/header.tsx'
import { Sidebar } from '@/components/ui/sidebar'
import { useBreadcrumbs } from '@/components/ui/sidebar/bread-crumbs'
import { data } from '@/data'
import { useWindowSize } from '@/hooks/use-window-size'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const { selectedKeys } = useBreadcrumbs()
  const { width } = useWindowSize()
  const isMobile = width && width <= 725

  console.log(width)

  return (
    <Layout style={{ backgroundColor: 'var(--color-green-desaturated)' }}>
      <Layout>
        {isMobile ? <MainHeader /> : <Sidebar />}
        <Layout style={{ backgroundColor: 'var(--color-green-desaturated)' }}>
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
                  element={<LineGraph data={data} isTooltip legend variant={'linear'} />}
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
