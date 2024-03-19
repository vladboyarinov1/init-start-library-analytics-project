import { breadCrumbsRuducer } from '@/components/ui/components/bread-crumbs-redux'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    breadCrumbs: breadCrumbsRuducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
