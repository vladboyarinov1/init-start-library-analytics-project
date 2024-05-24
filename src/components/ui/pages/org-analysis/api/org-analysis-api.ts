import { instance } from '@/api'

export const orgAnalysisApi = {
  getCirclePackingData(queryString: any) {
    return instance.get(`institutions?filter=${queryString}`)
  },
  getData(iso: string, type: string) {
    return instance.get(`institutions?filter=country_code:${iso},type:${type}`)
  },
}
