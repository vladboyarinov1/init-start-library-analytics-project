import { instance } from '@/api'

export const keywordNetworkApi = {
  getData(queryString: any) {
    // console.log(queryString)
    return instance.get(`concepts?filter=${queryString}`)
  },
}

//wikidata_id:Q413
//https://api.openalex.org/concepts?filter=wikidata_id:${Q413},direction_id:${C121332964}
