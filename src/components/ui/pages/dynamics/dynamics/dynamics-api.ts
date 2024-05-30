import { instance } from '@/api'

export const dynamicsApi = {
  getData(authorId: string, endYear: string, ror: string, sourcesId: string, startYear: string) {
    return instance.get(
      `https://api.openalex.org/works?group_by=publication_year&per_page=200&filter=authorships.institutions.lineage:${ror},authorships.author.id:${authorId},primary_topic.id:${sourcesId},publication_year:${startYear}-${endYear}`
    )
  },
}
//https://api.openalex.org/works?group_by=cited_by_count&per_page=200&filter=authorships.institutions.lineage:i45812101,authorships.author.id:a5055075513,primary_topic.id:t11127

//https://api.openalex.org/works?group_by=publication_year&per_page=200&filter=authorships.institutions.lineage:i45812101,authorships.author.id:a5055075513,primary_topic.id:t11127
//тут диапазон лет
//https://openalex.org/works?page=1&filter=authorships.institutions.lineage%3Ai45812101,authorships.author.id%3Aa5055075513,publication_year%3A2010-2023,primary_topic.id%3At11127

//test
//https://openalex.org/works?page=1&filter=authorships.institutions.lineage%3Ai45812101,publication_year%3A2010-2023,authorships.author.id%3Aa5067243994,primary_topic.id%3At10097

//https://api.openalex.org/works?group_by=publication_year&per_page=200&filter=authorships.institutions.lineage:i45812101,authorships.author.id:a5055075513,primary_topic.id:t11127

//https://api.openalex.org/works?group_by=publication_year&per_page=200&filter=authorships.institutions.lineage:i45812101,authorships.author.id:%3Aa5067243994,primary_topic.id:t11127
