import { instance } from '@/api'

export const orgAnalysisApi = {
  getData(queryString: any) {
    console.log(queryString)

    return instance.get(
      `https://api.openalex.org/institutions?filter=country_code:BY,type:education`
    )
  },
}
