import { createAppAsyncThunk } from '@/common/utils/create-app-async-thunk'
import { paramsToQueryString } from '@/common/utils/params-to-query-string'
import { keywordNetworkApi } from '@/components/ui/pages/keyword-network/api/keyword-network-api'
import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const relatedConcepts = action.payload.data[0]['related_concepts']
      const childrenArray = relatedConcepts.map((concept: any) => ({
        name: concept.display_name,
        score: concept.score,
      }))
      const displayName = action.payload.data[0]['display_name']

      return {
        ...state,
        data: {
          data: { children: childrenArray.slice(0, 16) },
          exportData: childrenArray,
          title: displayName,
        },
      }
    })
  },
  initialState: {
    data: {
      data: { children: [] },
      exportData: [],
      title: null,
    },
  },
  name: 'keywordNetwork',
  reducers: {},
})
const fetchData = createAppAsyncThunk(`${slice.name}/fetchData`, async (param: any) => {
  const transformedParams = paramsToQueryString(param, {
    'ID направления': 'openalex_id:',
    Wikidata: 'wikidata_id:',
  })

  try {
    const res = await keywordNetworkApi.getData(transformedParams.queryString)

    return { data: res.data.results }
  } catch (e: any) {
    throw new Error(e)
  }
})

export const asyncActions = { fetchData }
