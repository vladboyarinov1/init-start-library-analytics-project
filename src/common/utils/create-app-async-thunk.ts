import { AppDispatch, RootState } from '@/common/types/common-types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: any
  state: RootState
}>()
