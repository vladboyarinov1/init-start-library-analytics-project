import { Card } from '@/components/ui/card'
import { CirclePacking } from '@/components/ui/circle-packing'
import { LineGraph } from '@/components/ui/line-graph'
import { CirclePackingData, data } from '@/data'

export function App() {
  return (
    <div>
      <Card height={420} maxWidth={1140}>
        <LineGraph data={data} isTooltip legend variant={'linear'} />
      </Card>
      <Card background={'white'} height={600} maxWidth={1140}>
        <CirclePacking data={CirclePackingData} padding={6} />
      </Card>
    </div>
  )
}
