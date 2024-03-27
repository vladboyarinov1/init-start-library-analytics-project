import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  initialState: {
    breadcrumbPath: [],
  } as const,
  name: 'breadcrumbs',
  reducers: {
    changeLink(state: any, action: PayloadAction<{ path: string[] }>) {
      return {
        ...state,
        breadcrumbPath: action.payload.path,
      }
    },
  },
})
export const { changeLink } = slice.actions
