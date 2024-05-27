import { instance } from '@/api'

export const publicationsKeywordsApi = {
  getData(id: string) {
    return instance.get(
      `works?filter=from_publication_date:2020-01-01,to_publication_date:2023-12-31,concept.id:${id},institutions.country_code:${countries}&group_by=publication_year`
    )
  },
}
//C2778407487
