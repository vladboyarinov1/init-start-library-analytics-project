import { Card } from '@/components/ui/card'
import { CirclePacking } from '@/components/ui/circle-packing'
import { LineGraph } from '@/components/ui/line-graph'
import { RadialBar } from '@/components/ui/radial-bar'
import { CirclePackingData, data, radialData } from '@/data'

export function App() {
  return (
    <div>
      <Card height={'auto'} maxWidth={1140}>
        <LineGraph data={data} isTooltip legend variant={'linear'} />
      </Card>
      <Card background={'white'} height={'auto'} maxWidth={1140}>
        <CirclePacking data={CirclePackingData} padding={6} />
      </Card>
      <Card background={'white'} height={'auto'} maxWidth={560}>
        <RadialBar data={radialData} />
      </Card>
    </div>
  )
}
