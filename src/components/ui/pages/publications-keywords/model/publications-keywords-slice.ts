import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { publicationsKeywordsApi } from '@/components/ui/pages/publications-keywords/api/publications-keywords-api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Определение интерфейсов
interface DataPoint {
  x: string
  y: number
}

interface LinearData {
  data: DataPoint[]
  id: string
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

export const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(
      fetchPublicationData.fulfilled,
      (
        state,
        action: PayloadAction<
          { data: { count: number; key: string; key_display_name: string }[]; id: string }[]
        >
      ) => {
        const formattedData: LinearData[] = action.payload.map(({ data, id }) => ({
          data: data
            .sort((a, b) => a.key.localeCompare(b.key)) // Сортировка по годам
            .map(item => ({
              x: item.key_display_name,
              y: item.count,
            })),
          id,
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
  async (ids: string[]) => {
    try {
      const requests = ids.map(id => publicationsKeywordsApi.getData(id))
      const responses = await Promise.all(requests)

      const data = responses.map((res, index) => ({
        data: res.data['group_by'],
        id: ids[index],
      }))

      return data
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = {
  fetchPublicationData,
}
