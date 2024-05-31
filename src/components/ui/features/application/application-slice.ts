import { appActions } from '@/components/ui/features/common-actions'
import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

export const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(appActions.setError, (state, action) => {
        state.error = action.payload.error
      })
      .addCase(appActions.setLinearProgress, (state, action) => {
        state.isLinearProgress = action.payload.value
      })
      .addMatcher(isPending, (state, _action) => {
        state.isLinearProgress = true
      })
      .addMatcher(isRejected, (state, action: AnyAction) => {
        state.isLinearProgress = false
        if (action.payload) {
          if (action.type.includes('addTodolist') || action.type.includes('addTask')) {
            return
          }
          state.error = action.payload.errors
        } else {
          state.error = action.error.message ?? 'Some error occurred'
        }
      })
      .addMatcher(isFulfilled, (state, _action) => {
        state.isLinearProgress = false
      })
  },
  initialState: {
    error: null as null | string, // errorIsActive
    isLinearProgress: false as boolean | null,
  },
  name: 'application',
  reducers: {},
})
