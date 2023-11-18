import { useState } from 'react'

import { BarChar } from '@/components/ui/bar-chart'
import { Card } from '@/components/ui/card'
import { CirclePacking } from '@/components/ui/circle-packing'
import { LineGraph } from '@/components/ui/line-graph'
import { PieChart } from '@/components/ui/pie-chart'
import { RadialBar } from '@/components/ui/radial-bar'
import { TreeMap } from '@/components/ui/tree-map'
import { BarChartData, PieData, data, radialData, treeMapData } from '@/data'
import axios from 'axios'

export function App() {
  const [dataget, setDataget] = useState<any>([])
  const [ror, setRor] = useState<any>('C121332964')

  const instance = axios.create({
    baseURL: 'https://api.openalex.org/',
  })

  const Api = {
    async getData(ror: any) {
      const res = await instance.get(`concepts?filter=openalex_id:https://openalex.org/${ror}`)

      setDataget(res.data.results)
    },
  }

  const sendGet = () => {
    return Api.getData(ror)
  }

  const a: any[] = []

  dataget?.forEach((obj: any) => {
    obj['related_concepts'].forEach((concept: any) => {
      a.push({ name: concept.display_name, score: concept.score })
    })
  })

  const result = {
    children: a,
  }

  return (
    <div>
      <Card background={'white'} height={'auto'} maxWidth={1140}>
        <LineGraph data={data} isTooltip legend variant={'linear'} />
      </Card>
      <div>
        <input
          onChange={e => {
            setRor(e.currentTarget.value)
          }}
          placeholder={'inter ror'}
          type={'text'}
        />
        <button onClick={sendGet}>GET DATA</button>
      </div>
      {dataget.length && result && (
        <Card background={'white'} height={'auto'} maxWidth={1140}>
          <CirclePacking data={result} padding={6} />
        </Card>
      )}
      <Card background={'white'} height={'auto'} maxWidth={560}>
        <RadialBar data={radialData} />
      </Card>
      <Card background={'white'} height={'auto'} maxWidth={1100}>
        <TreeMap data={treeMapData} />
      </Card>
      <Card background={'white'} height={'auto'} maxWidth={1100}>
        <PieChart data={PieData} />
      </Card>
      <Card background={'white'} height={'auto'} maxWidth={1100}>
        <BarChar data={BarChartData} />
      </Card>
    </div>
  )
}
