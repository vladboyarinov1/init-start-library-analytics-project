import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { publicationsKeywordsApi } from '@/components/ui/pages/publications-keywords/api/publications-keywords-api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Определение интерфейсов
interface DataPoint {
  x: string
  y: number
}

interface LinearData {
  country: string // исправим на country
  data: DataPoint[]
  id: string
  key: string
}

interface PublicationsKeywordsState {
  citationsData: LinearData[]
  publicationsData: LinearData[]
}

// Начальное состояние
const initialState: PublicationsKeywordsState = {
  citationsData: [],
  publicationsData: [],
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
    // Обновленная обработка полезной нагрузки в `fetchPublicationData.fulfilled`
    builder.addCase(
      fetchPublicationData.fulfilled,
      (
        state,
        action: PayloadAction<FetchPublicationDataPayload> // Отразить обновленную структуру полезной нагрузки
      ) => {
        const { data } = action.payload

        // Обновление структуры данных
        const formattedData: LinearData[] = data.map(({ country, data, id }, index) => ({
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

        console.log(formattedData)

        // Обновление state
        state.publicationsData = formattedData
        state.citationsData = formattedData // Если необходимо также для citationsData
      }
    )
  },
  initialState,
  name: 'publicationsKeywords',
  reducers: {},
})

const fetchPublicationData = createAppAsyncThunk(
  `${slice.name}/fetchPublicationData`,
  async (param: { countries: string[]; endYear: string; ids: string[]; startYear: string }) => {
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

      return { countries, data } as FetchPublicationDataPayload // Возвращаем обновленный тип данных
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = {
  fetchPublicationData,
}
