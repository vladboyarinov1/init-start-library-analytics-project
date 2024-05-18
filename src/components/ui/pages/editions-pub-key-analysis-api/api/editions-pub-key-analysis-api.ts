import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getBarChartCountryData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=country_code`)
  },
  getBarChartData(queryString: any) {
    // return instance.get(`sources?filter=${queryString}`)
    return instance.get(`publishers?filter=${queryString}`)
  },
  getData(iso: string, type: string) {
    return instance.get(`sources?filter=country_code:${iso},type:${type}`)
  },
  getPieChartData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=type`)
  },
  getTreeMapData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=continent`)
  },
}
