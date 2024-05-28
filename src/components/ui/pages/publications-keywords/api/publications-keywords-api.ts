import { instance } from '@/api'

export const publicationsKeywordsApi = {
  getCountriesData(id: string, startYear: string, endYear: string) {
    return instance.get(
      `works?filter=from_publication_date:${startYear}-01-01,to_publication_date:${endYear}-12-31,concept.id:${id}&group_by=institutions.country_code`
    )
  },
  getData(id: string, countries: string, startYear: string, endYear: string) {
    return instance.get(
      `works?filter=from_publication_date:${startYear}-01-01,to_publication_date:${endYear}-12-31,concept.id:${id},institutions.country_code:${countries}&group_by=publication_year`
    )
  },
}
//C2778407487
