import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { orgAnalysisApi } from '@/components/ui/pages/org-analysis/api/org-analysis-api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface YearItem {
  cited_by_count: number
  works_count: number
  year: number
}

interface Item {
  counts_by_year: YearItem[]
  display_name: string
}

interface ApiResponse {
  results: Item[]
}

interface FetchDataParams {
  endYear: number
  iso: string
  startYear: number
  type: string
}

interface OrgAnalysisState {
  citationsData: { data: { x: string; y: number }[]; id: string }[]
  publicationsData: { data: { x: string; y: number }[]; id: string }[]
}

const initialState: OrgAnalysisState = {
  citationsData: [],
  publicationsData: [],
}

const fetchData = createAppAsyncThunk('orgAnalysis/fetchData', async (params: FetchDataParams) => {
  const { endYear, iso, startYear, type } = params

  console.log(endYear)

  try {
    const res = await orgAnalysisApi.getData(iso, type)

    return { data: res.data.results, endYear, startYear }
  } catch (e: any) {
    throw new Error(e.message)
  }
})

export const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<{ data: Item[] }>) => {
      const { data, endYear, startYear } = action.payload

      console.log(endYear, startYear)
      const publicationsYearMap: { [year: string]: { x: string; y: number }[] } = {}
      // const startYear = 2010
      // const endYear = 2012

      data.forEach(item => {
        item.counts_by_year.forEach(yearItem => {
          if (yearItem.year >= startYear && yearItem.year <= endYear) {
            const year = yearItem.year.toString()
            const entry = { x: item.display_name, y: yearItem.works_count }

            if (!publicationsYearMap[year]) {
              publicationsYearMap[year] = []
            }

            publicationsYearMap[year].push(entry)
          }
        })
      })

      const newPublicationsData = Object.keys(publicationsYearMap).map(year => ({
        data: publicationsYearMap[year],
        id: year,
      }))

      const citationsYearMap: { [year: string]: { x: string; y: number }[] } = {}

      data.forEach(item => {
        item.counts_by_year.forEach(yearItem => {
          if (yearItem.year >= startYear && yearItem.year <= endYear) {
            const year = yearItem.year.toString()
            const entry = { x: item.display_name, y: yearItem.cited_by_count }

            if (!citationsYearMap[year]) {
              citationsYearMap[year] = []
            }

            citationsYearMap[year].push(entry)
          }
        })
      })

      const newCitationsData = Object.keys(citationsYearMap).map(year => ({
        data: citationsYearMap[year],
        id: year,
      }))

      state.citationsData = newCitationsData
      state.publicationsData = newPublicationsData
    })
  },
  initialState,
  name: 'orgAnalysis',
  reducers: {},
})

export const asyncActions = { fetchData }
export const orgAnalysisReducer = slice.reducer
