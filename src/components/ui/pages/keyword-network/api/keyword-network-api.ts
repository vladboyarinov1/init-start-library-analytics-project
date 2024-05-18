import { instance } from '@/api'

export const keywordNetworkApi = {
  getData() {
    // console.log(queryString)

    return instance.get(`concepts?filter=openalex_id:https://openalex.org/C121332964`)
  },
}
