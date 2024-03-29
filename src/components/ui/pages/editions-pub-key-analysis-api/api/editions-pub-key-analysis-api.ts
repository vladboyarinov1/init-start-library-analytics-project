import { instance } from '@/api'

export const editionsPubKeyAnalysisApi = {
  getData() {
    return instance.get('sources?filter=country_code:ES,type:journal ')
  },
}
