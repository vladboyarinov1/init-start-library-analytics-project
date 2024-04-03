import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getData(iso: string, type: string) {
    return instance.get(`sources?filter=country_code:${iso},type:${type} `)
  },
}
