import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { editionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/api/editions-pub-key-analysis-api'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const newPublicationsData = action.payload.data.slice(0, 7).map((item: any) => ({
        id: item.display_name,
        value: item.works_count,
      }))
      const newCitationsData = action.payload.data.slice(0, 7).map((item: any) => ({
        id: item.display_name,
        value: item.cited_by_count,
      }))

      return {
        ...state,
        citationsData: newCitationsData,
        publicationsData: newPublicationsData,
      }
    })
  },
  initialState: {
    citationsData: [],
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

      console.log(res.data.results)

      return { data: res.data.results }
    } catch (e: any) {
      throw new Error(e)
    }
  }
)

export const asyncActions = { fetchData }
