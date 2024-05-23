import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { orgAnalysisApi } from '@/components/ui/pages/org-analysis/api/org-analysis-api'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  extraReducers: builder =>
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action.payload.data)

      // Преобразуем данные в нужный формат для публикаций
      const publicationsYearMap: { [year: string]: { x: string; y: number }[] } = {}

      action.payload.data.forEach((item: any) => {
        item.counts_by_year.forEach((yearItem: any) => {
          const year = yearItem.year.toString()
          const entry = { x: item.display_name, y: yearItem.works_count }

          if (!publicationsYearMap[year]) {
            publicationsYearMap[year] = []
          }

          publicationsYearMap[year].push(entry)
        })
      })

      const newPublicationsData = Object.keys(publicationsYearMap).map(year => ({
        data: publicationsYearMap[year],
        id: year,
      }))

      // Преобразуем данные в нужный формат для цитирований
      const citationsYearMap: { [year: string]: { x: string; y: number }[] } = {}

      action.payload.data.forEach((item: any) => {
        item.counts_by_year.forEach((yearItem: any) => {
          const year = yearItem.year.toString()
          const entry = { x: item.display_name, y: yearItem.cited_by_count } // Используем cited_by_count внутри counts_by_year

          if (!citationsYearMap[year]) {
            citationsYearMap[year] = []
          }

          citationsYearMap[year].push(entry)
        })
      })

      const newCitationsData = Object.keys(citationsYearMap).map(year => ({
        data: citationsYearMap[year],
        id: year,
      }))

      console.log(newCitationsData)

      return {
        ...state,
        citationsData: newCitationsData,
        publicationsData: newPublicationsData,
      }
    }),
  initialState: {
    data: { citationsData: [], publicationsData: [] },
  },
  name: 'orgAnalysis',
  reducers: {},
})

const fetchData = createAppAsyncThunk(`${slice.name}/fetchData`, async (_param: any) => {
  try {
    const res = await orgAnalysisApi.getData({})

    return { data: res.data.results }
  } catch (e: any) {
    throw new Error(e)
  }
})

export const asyncActions = { fetchData }
