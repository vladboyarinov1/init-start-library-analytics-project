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
                  element={
                    <div>
                      <LineGraph data={data} isTooltip legend variant={'linear'} />
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet
                        architecto, consequuntur cumque cupiditate error facilis, ipsa nulla unde
                        veritatis voluptatum. In sint ullam voluptatem! Delectus deleniti dolorum
                        explicabo facilis iure laboriosam libero neque officiis quia, quis quo unde!
                        A aliquid amet animi asperiores, aut consequuntur cum debitis deleniti
                        dolore eaque eos et exercitationem facilis fugit harum inventore ipsam iusto
                        nisi quisquam rem sequi vitae voluptate. Fuga magni odio pariatur quaerat
                        quibusdam. A aliquam consequuntur corporis culpa deserunt distinctio dolor
                        doloribus eos eum excepturi fugiat hic ipsa labore magni molestias nam,
                        nulla pariatur perferendis perspiciatis, possimus praesentium quas quasi,
                        quibusdam quos recusandae sapiente sed sunt tempora velit veritatis. Atque,
                        doloribus eos iure laboriosam minima nam quis tenetur vel voluptatum? Ab
                        beatae distinctio id labore maxime nihil possimus! Assumenda consectetur
                        doloremque ducimus error expedita explicabo facere facilis iusto, maiores
                        pariatur possimus rem saepe similique temporibus totam ut velit?
                        Consequuntur enim est in iusto magni non qui repellendus sunt vero. A
                        accusantium architecto assumenda corporis delectus deleniti dolores, ducimus
                        enim error facilis inventore ipsam iusto labore libero maxime nam nemo neque
                        nisi nostrum provident quae quia quo reprehenderit rerum soluta veniam
                        veritatis. Eos fuga inventore ipsa minima quam repellendus, voluptatem. Amet
                        aperiam cumque doloremque ea eum, ex facere fugit libero minima modi odit
                        officia quo rerum sed sint, tempore totam ut veritatis. Ad culpa debitis
                        ducimus earum eligendi id magni minima quae quam qui, quo repellendus sint,
                        voluptatum. Ab exercitationem optio repudiandae tenetur voluptates? Alias
                        cumque distinctio inventore iste mollitia! Ab dolorem laudantium natus odio
                        sed. Alias at cum eius eum facere id iste perferendis quaerat sequi ut.
                        Aliquam autem consectetur deserunt dicta fugiat qui suscipit? A, aliquam
                        atque consequuntur culpa deleniti deserunt excepturi expedita facere fugiat
                        fugit iure laudantium nam nisi nobis nulla quae quas quis sed tempora ullam
                        voluptatem!
                      </div>
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
