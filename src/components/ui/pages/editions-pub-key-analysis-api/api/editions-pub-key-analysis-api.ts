import { instance } from '@/api'
// type Filters = 'lalal' | 'x_concepts.id:'
export const editionsPubKeyAnalysisApi = {
  getData(iso: string, type: string) {
    return instance.get(`sources?filter=country_code:${iso},type:${type} `)
  },
  getPieChartData(filter: string, filterValue: string, iso: string) {
    return instance.get(`sources?filter=${filter}${filterValue},country_code:${iso}&group_by=type 
`)
  },
}
//sources?filter=x_concepts.id:C41008148&group_by=type
//x_concepts.id:
//C41008148
//https://api.openalex.org/sources?filter=country_code:BY,display_name.search:Belarusian National Technical University&group_by=type

//https://api.openalex.org/sources?filter=country_code:US,display_name.search:harvard%20university&group_by=type
