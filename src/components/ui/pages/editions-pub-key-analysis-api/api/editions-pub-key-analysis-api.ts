import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getBarChartCountryData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=country_code`)
  },
  getBarChartData(queryString: any) {
    // return instance.get(`sources?filter=${queryString}`)
    return instance.get(`publishers?filter=${queryString}`)
  },
  getData(queryString: any) {
    return instance.get(`sources?filter=${queryString}`)
    //iso, type
  },
  getPieChartData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=type`)
  },
  getTreeMapData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=continent`)
  },
}
