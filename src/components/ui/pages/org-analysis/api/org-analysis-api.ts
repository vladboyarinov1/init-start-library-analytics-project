import { instance } from '@/api'

export const orgAnalysisApi = {
  getData(iso: string, type: string) {
    console.log(iso)

    return instance.get(
      `https://api.openalex.org/institutions?filter=country_code:${iso},type:${type}`
    )
  },
}
