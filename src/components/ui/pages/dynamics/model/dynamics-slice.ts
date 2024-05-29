import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { dynamicsApi } from '@/components/ui/pages/dynamics/dynamics/dynamics-api.ts'
import { createSlice } from '@reduxjs/toolkit'

// Определение типа Linear
export type Linear = {
  data: {
    x: string
    y: number
  }[]
  id: string
}

// AsyncThunk для получения данных с сервера
const fetchData = createAppAsyncThunk(
  'dynamics/fetchData',
  async (param: {
    authorId: string[]
    endYear: string
    ror: string[]
    sourcesId: string[]
    startYear: string
  }) => {
    const { authorId, endYear, ror, sourcesId, startYear } = param

    try {
      const requests = authorId.map((id, index) =>
        dynamicsApi.getData(id, endYear, ror[index], sourcesId[index], startYear)
      )
      const responses = await Promise.all(requests)
      const data = responses.map((res, index) => ({
        data: res.data['group_by'],
        ror: ror[index],
      }))

      return { data }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

// Создание слайса
export const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Преобразование данных с сервера в формат Linear
      let newData = action.payload.data.map((response, index) => ({
        data: response.data.map(item => ({
          x: item.key_display_name,
          y: item.count,
        })),
        id: action.payload.data[index].ror,
      }))

      // Сортировка данных по значению x (год)
      newData = newData.map(item => ({
        ...item,
        data: item.data.sort((a, b) => a.x - b.x),
      }))

      state.data = newData
    })
  },

  initialState: {
    data: [] as Linear[],
  },
  name: 'dynamics',
  reducers: {},
})

// Экспортируем асинхронные действия
export const asyncActions = {
  fetchData,
}
