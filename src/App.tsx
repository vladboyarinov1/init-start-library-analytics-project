// import { useState } from 'react'
//
// import { Card } from '@/components/ui/card'
// import { BarChar } from '@/components/ui/diagrams/bar-chart'
// import { CirclePacking } from '@/components/ui/diagrams/circle-packing'
// import { LineGraph } from '@/components/ui/diagrams/line-graph'
// import { PieChart } from '@/components/ui/diagrams/pie-chart'
// import { RadialBar } from '@/components/ui/diagrams/radial-bar'
// import { TreeMap } from '@/components/ui/diagrams/tree-map'
// import { BarChartData, PieData, data, radialData, treeMapData } from '@/data'
// import axios from 'axios'

import { CheckboxItem } from '@/components/ui/checkbox-item'
import { SelectButton } from '@/components/ui/select-button'
import { Sidebar } from '@/components/ui/sidebar'

export function App() {
  // const [dataget, setDataget] = useState<any>([])
  // const [ror, setRor] = useState<any>('C121332964')
  //
  // const instance = axios.create({
  //   baseURL: 'https://api.openalex.org/',
  // })
  //
  // const Api = {
  //   async getData(ror: any) {
  //     const res = await instance.get(`concepts?filter=openalex_id:https://openalex.org/${ror}`)
  //
  //     setDataget(res.data.results)
  //   },
  // }
  //
  // const sendGet = () => {
  //   return Api.getData(ror)
  // }
  //
  // const a: any[] = []
  //
  // dataget?.forEach((obj: any) => {
  //   obj['related_concepts'].forEach((concept: any) => {
  //     a.push({ name: concept.display_name, score: concept.score })
  //   })
  // })
  //
  // const result = {
  //   children: a,
  // }

  return (
    // <div>
    //   <Card background={'white'} height={'auto'} maxWidth={1140}>
    //     <LineGraph data={data} isTooltip legend variant={'linear'} />
    //   </Card>
    //   <div>
    //     <input
    //       onChange={e => {
    //         setRor(e.currentTarget.value)
    //       }}
    //       placeholder={'inter ror'}
    //       type={'text'}
    //     />
    //     <button onClick={sendGet}>GET DATA</button>
    //   </div>
    //   {dataget.length && result && (
    //     <Card background={'white'} height={'auto'} maxWidth={1140}>
    //       <CirclePacking data={result} padding={6} />
    //     </Card>
    //   )}
    //   <Card background={'white'} height={'auto'} maxWidth={560}>
    //     <RadialBar data={radialData} />
    //   </Card>
    //   <Card background={'white'} height={'auto'} maxWidth={1100}>
    //     <TreeMap data={treeMapData} />
    //   </Card>
    //   <Card background={'white'} height={'auto'} maxWidth={1100}>
    //     <PieChart data={PieData} />
    //   </Card>
    //   <Card background={'white'} height={'auto'} maxWidth={1100}>
    //     <BarChar data={BarChartData} />
    //   </Card>
    // </div>
    <div>
      {/*<SelectButton*/}
      {/*  itemsData={[*/}
      {/*    {*/}
      {/*      items: [{ label: 'експорт в эксель ' }, { label: 'експорт в word' }],*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  title={'export'}*/}
      {/*  variant={'export'}*/}
      {/*/>*/}
      {/*<CheckboxItem />*/}
      <Sidebar />
    </div>
  )
}
