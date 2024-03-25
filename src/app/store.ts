import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    breadCrumbs: breadCrumbsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
