import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getBarChartCountryData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=country_code`)
  },
  getBarChartData(queryString: any) {
    return instance.get(`publishers?filter=${queryString}`)
  },
  getData(queryString: any) {
    return instance.get(`sources?filter=${queryString}`)
  },
  getOpenAccessData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=is_oa`)
  },
  getPieChartData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=type`)
  },
  getTreeMapData(queryString: any) {
    return instance.get(`sources?filter=${queryString}&group_by=continent`)
  },
}
