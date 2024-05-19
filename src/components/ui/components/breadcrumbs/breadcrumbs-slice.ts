import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  // extraReducers: builder =>
  //   builder.addCase(getBreadcrumb.fulfilled, (state, action) => {
  //     return {
  //       ...state,
  //       breadcrumbPath: action.payload.path,
  //     }
  //   }),
  initialState: {
    breadcrumbPath: [],
  } as const,
  name: 'breadcrumbs',
  reducers: {
    changeLink(state: any, action: PayloadAction<{ path: string[] }>) {
      localStorage.setItem('breadcrumbs', JSON.stringify(action.payload.path))

      return {
        ...state,
        breadcrumbPath: action.payload.path,
      }
    },
  },
})
// const getBreadcrumb = createAppAsyncThunk(
//   `${slice.name}/getBreadcrumb`,
//   async (_arg, { getState }) => {
//     localStorage.setItem('breadcrumbs', JSON.stringify())
//     try {
//     } catch (e: any) {
//       throw new Error(e)
//     }
//   }
// )

export const { changeLink } = slice.actions
// useEffect(() => {
//   const savedBreadcrumbs = localStorage.getItem('breadcrumbs')
//
//   console.log(12)
//
//   if (savedBreadcrumbs) {
//     dispatch({ payload: JSON.parse(savedBreadcrumbs), type: 'breadcrumbs/setBreadcrumbPath' })
//   }
// }, [dispatch])
// useEffect(() => {
//   localStorage.setItem('breadcrumbs', JSON.stringify(url))
// }, [url])
