import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { publicationsKeywordsApi } from '@/components/ui/pages/publications-keywords/api/publications-keywords-api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DataPoint {
  x: string
  y: number
}

interface LinearData {
  country: string
  data: DataPoint[]
  id: string
  key: string
}

interface PublicationsKeywordsState {
  countries: any
  linearData: LinearData[]
}

const initialState: PublicationsKeywordsState = {
  countries: {
    data: [],
    exportData: [],
  },
  linearData: [],
}

interface PublicationData {
  country: string
  data: {
    count: number
    key: string
    key_display_name: string
  }[]
  id: string
}

interface FetchPublicationDataPayload {
  countries: string[]
  data: PublicationData[]
}

export const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(
        fetchPublicationData.fulfilled,
        (state, action: PayloadAction<FetchPublicationDataPayload>) => {
          const { data } = action.payload

          const formattedData: LinearData[] = data.map(({ country, data }, index) => ({
            country,
            data: data
              .sort((a, b) => a.key.localeCompare(b.key))
              .map(item => ({
                x: item.key_display_name,
                y: item.count,
              })),
            id: country,
            key: `${country}-${index}`,
          }))

          state.linearData = formattedData
        }
      )
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        const newBarChartData = action.payload.data
          .slice(0, 9)
          .map((item: any) => ({
            id: item['key_display_name'],
            value: item['count'],
          }))
          .filter(
            (item: any) => item.id !== 'unknown' && item.value !== 'unknown' && item.value !== 0
          )

        return {
          ...state,
          countries: {
            data: newBarChartData,
            exportData: action.payload.data,
          },
        }
      })
  },
  initialState,
  name: 'publicationsKeywords',
  reducers: {},
})

const fetchPublicationData = createAppAsyncThunk(
  `${slice.name}/fetchPublicationData`,
  async (
    param: { countries: string[]; endYear: string; ids: string[]; startYear: string },
    { rejectWithValue }
  ) => {
    try {
      const { countries, endYear, ids, startYear } = param
      const requests = ids.map((id, index) =>
        publicationsKeywordsApi.getData(id, countries[index], startYear, endYear)
      )
      const responses = await Promise.all(requests)

      const data: PublicationData[] = responses.map((res, index) => ({
        country: countries[index],
        data: res.data['group_by'],
        id: ids[index],
      }))

      if (responses[0].data.meta.count > 0) {
        return { countries, data } as FetchPublicationDataPayload
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)
const fetchCountriesData = createAppAsyncThunk(
  `${slice.name}/fetchCountriesData`,
  async (param: { endYear: string; id: string; startYear: string }, { rejectWithValue }) => {
    const { endYear, id, startYear } = param

    try {
      const res = await publicationsKeywordsApi.getCountriesData(id, startYear, endYear)

      if (res.data.meta.count > 0) {
        return { data: res.data['group_by'] }
      } else {
        return rejectWithValue({ errors: 'Нет данных для отображения' })
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = {
  fetchCountriesData,
  fetchPublicationData,
}
