import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { editionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/api/editions-pub-key-analysis-api'
import { data } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const newPublicationsData = action.payload.data.slice(0, 7).map((item: any) => ({
          id: item['display_name'],
          value: item['works_count'],
        }))
        const newCitationsData = action.payload.data.slice(0, 7).map((item: any) => ({
          id: item['display_name'],
          value: item['cited_by_count'],
        }))

        return {
          ...state,
          citationsData: newCitationsData,
          publicationsData: newPublicationsData,
        }
      })
      .addCase(fetchPieChartData.fulfilled, (state, action) => {
        console.log(action.payload.data)
        const newPieChartData = action.payload.data.map((item: any) => ({
          id: item['key_display_name'],
          value: item.count,
        }))

        console.log(newPieChartData)

        return {
          ...state,
          pieChartData: newPieChartData,
        }
      })
  },
  initialState: {
    citationsData: [],
    pieChartData: [],
    publicationsData: [],
  },
  name: 'pubKeyAnalysis',
  reducers: {},
})
// Определите fetchData перед созданием slice
const fetchData = createAppAsyncThunk(
  `${slice.name}/fetchData`,
  async (param: { iso: string; type: string }) => {
    try {
      const res = await editionsPubKeyAnalysisApi.getData(param.iso, param.type)

      // dispatch(editionsPubKeyAnalysisActions.setData({ data: res.data }))
      return { data: res.data.results }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

const filterMappings: Record<string, string> = {
  'ID направления': 'x_concepts.id:',
  Издатель: 'display_name.search:',
  'Код страны': 'country_code:',
}

interface FormData {
  id?: string
  iso?: string
  publisher?: string
}
interface FormDataWithQueryString extends FormData {
  queryString: string
}

const fetchPieChartData = createAppAsyncThunk(
  `${slice.name}/fetchPieChartData`,
  async (param: any) => {
    function transformParams(param: any): FormDataWithQueryString {
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
        }
      })

      if (!transformedParams.iso) {
        throw new Error('Код страны (iso) отсутствует в параметрах')
      }

      return { ...transformedParams, queryString }
    }

    const transformedParams = transformParams(param)

    console.log(transformedParams.queryString)

    try {
      const res = await editionsPubKeyAnalysisApi.getPieChartData(transformedParams.queryString)

      console.log(res.data['group_by'])

      return { data: res.data['group_by'] }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = { fetchData, fetchPieChartData }
