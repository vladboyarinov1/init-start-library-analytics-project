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
                        voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        architecto beatae ex molestiae saepe! Amet, sint, totam. Ad aut beatae,
                        cumque debitis eius fugiat laborum magnam maxime, nemo, numquam officiis
                        omnis quas quis quo sapiente tempore ut voluptate. Asperiores cumque debitis
                        distinctio ea exercitationem fugiat impedit in magnam magni minus obcaecati
                        perspiciatis soluta suscipit ullam ut velit, vitae voluptatem? Deserunt
                        error in laboriosam non. Aliquam autem consequatur, error fuga
                        necessitatibus numquam qui reprehenderit temporibus veniam vero.
                        Consequuntur cumque cupiditate deserunt dolores eveniet explicabo id illo,
                        magnam maiores molestias omnis, perferendis quo quos sunt totam veritatis,
                        voluptates. Adipisci amet hic nihil repudiandae! Animi atque cupiditate
                        deleniti inventore nulla obcaecati rerum. Accusamus alias deleniti
                        doloremque earum maiores, nam odio quos. Atque ducimus in laudantium minima,
                        molestiae nam quo saepe sed sint suscipit unde veniam? Earum eum fugiat nam
                        natus neque non quisquam. Accusamus aperiam cum debitis distinctio dolore
                        doloremque doloribus ex ipsa, ipsum itaque iusto magnam nam odit qui
                        repellendus sunt voluptatibus! Aliquam assumenda, dolorum incidunt iste
                        minus quibusdam quidem quos sequi. Accusamus amet atque consequatur debitis
                        dolor, ducimus eum explicabo harum iure laboriosam, odio quae qui quibusdam
                        rem totam vel voluptates voluptatibus. Ad beatae consequatur corporis dolor
                        eveniet in incidunt iure laboriosam libero molestias natus necessitatibus
                        nisi quam quis quos repellendus, sequi soluta, suscipit vel voluptatem.
                        Cupiditate eius eos eveniet nam non perspiciatis provident! Ad architecto
                        debitis doloremque, ducimus, eum fugiat ipsum iste libero magnam minus neque
                        optio provident ratione totam voluptatem. Aliquam consectetur eaque eligendi
                        tempora. A blanditiis enim facere quia, recusandae soluta? Alias corporis
                        deserunt dolorem dolores eos illum impedit mollitia placeat quae ratione?
                        Architecto aut consectetur distinctio dolore dolorem ducimus eius eligendi
                        eum, expedita id incidunt, ipsum modi neque nobis odit perferendis placeat
                        porro possimus, quae quibusdam quis reiciendis repudiandae sequi sit sunt
                        tempora vel! Amet cum, officia! Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Ab accusantium ad alias architecto, autem consequatur
                        corporis, dolorem eaque eveniet excepturi expedita explicabo incidunt
                        laboriosam laudantium maiores modi odio, pariatur porro possimus quam quidem
                        sunt tenetur vel vero vitae voluptatem voluptatum! Cumque eligendi est illo
                        in nobis porro sit vero voluptatem? Ab ad aperiam assumenda, blanditiis
                        consequuntur cumque cupiditate dolor dolorem ducimus illum libero magnam
                        modi mollitia neque nihil perferendis quae quaerat quasi quia quod
                        repellendus soluta sunt voluptatem voluptatibus voluptatum? Accusamus beatae
                        blanditiis corporis cupiditate dolor error fugit ipsum labore laboriosam
                        libero magni, maxime natus, obcaecati odio officia pariatur praesentium quae
                        quam quas quidem quisquam repellendus sapiente similique temporibus unde
                        voluptate voluptates voluptatibus? Eum maiores sapiente sunt. A ab accusamus
                        aperiam aspernatur autem blanditiis cupiditate delectus dignissimos
                        distinctio dolor dolorum eius error excepturi impedit incidunt ipsam ipsum
                        laboriosam laborum magnam magni mollitia natus odio officiis quam, qui quia
                        quidem quisquam quo rem repellendus sequi sint temporibus totam ullam vero
                        voluptas voluptatibus. Ad aliquid consequatur, deleniti doloribus ducimus ex
                        mollitia possimus rem sapiente sit ut voluptate voluptatem! A ad amet
                        consectetur culpa deserunt dicta, dolores eius error fuga fugiat fugit illo
                        iure maiores, natus neque non nulla obcaecati odit officiis optio
                        perferendis perspiciatis placeat quidem recusandae tenetur totam
                        voluptatibus! A culpa esse neque non quod sequi, veniam! Accusamus beatae
                        eaque laboriosam officia sint! Accusantium atque doloremque, dolorum eaque
                        eveniet exercitationem fugiat fugit nobis numquam sequi, similique tenetur
                        unde voluptatibus! A accusamus alias aliquid autem commodi culpa delectus
                        dicta dolore dolorem doloremque dolorum ea eaque eos eum ipsum iste itaque
                        iure iusto, laborum magni maiores maxime molestias nemo nesciunt nostrum
                        perspiciatis porro possimus praesentium quas quis quisquam quos ratione
                        reprehenderit rerum tenetur ullam voluptate? A aperiam commodi corporis
                        error exercitationem id libero non quia sed vitae? Blanditiis enim laborum
                        quas saepe voluptas?
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
