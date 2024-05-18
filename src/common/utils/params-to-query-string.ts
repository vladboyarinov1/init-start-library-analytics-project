interface FormDataWithQueryString extends FormData {
  queryString: string
}
interface FormData {
  id?: string
  iso?: string
  publisher?: string
  type?: string
}
const filterMappings: Record<string, string> = {
  'ID направления': 'x_concepts.id:',
  Издатель: 'display_name.search:',
  'Код страны': 'country_code:',
  'Тип направления': 'type:',
}

export function paramsToQueryString(param: any): FormDataWithQueryString {
  const transformedParams: FormData = {}

  let queryString = ''

  param.forEach((item: any, index: number) => {
    const mapping = filterMappings[item.selectValue]

    if (mapping) {
      queryString += `${mapping}${item.inputValue}`
      if (index < param.length - 1) {
        queryString += ','
      }
    }

    if (item.selectValue === 'ID направления') {
      transformedParams.id = item.inputValue
    } else if (item.selectValue === 'Код страны') {
      transformedParams.iso = item.inputValue
    } else if (item.selectValue === 'Издатель') {
      transformedParams.publisher = item.inputValue
    } else if (item.selectValue === 'Тип публикации') {
      transformedParams.type = item.inputValue
    }
  })

  return { ...transformedParams, queryString }
}