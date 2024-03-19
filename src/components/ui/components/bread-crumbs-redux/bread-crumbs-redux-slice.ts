import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  initialState: {
    link: [],
  } as const,
  name: 'breadCrumbs',
  reducers: {
    changeLink(state: any, action: PayloadAction<{ link: string }>) {
      return {
        ...state,
        link: action.payload.link,
      }
    },
  },
})
export const { changeLink } = slice.actions
