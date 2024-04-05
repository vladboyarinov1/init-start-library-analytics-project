import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { editionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/api/editions-pub-key-analysis-api'
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
  Издатель: 'publisher:',
  'Код страны': 'country_code:',
}

const fetchPieChartData = createAppAsyncThunk(
  `${slice.name}/fetchPieChartData`,
  async (param: { filter: string; filterValue: string; iso: string }) => {
    console.log(param.filter, param.filterValue)

    const mappedFilter = filterMappings[param.filter] || 'default' // Если сопоставления не найдено, используем значение по умолчанию

    try {
      const res = await editionsPubKeyAnalysisApi.getPieChartData(
        mappedFilter,
        param.filterValue,
        param.iso
      )

      // dispatch(editionsPubKeyAnalysisActions.setData({ data: res.data }))
      return { data: res.data['group_by'] }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = { fetchData, fetchPieChartData }
