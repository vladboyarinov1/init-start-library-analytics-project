import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { editionsPubKeyAnalysisReducer } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { keywordNetworkReducer } from '@/components/ui/pages/keyword-network'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    breadCrumbs: breadCrumbsReducer,
    editionsPubKeyAnalysis: editionsPubKeyAnalysisReducer,
    keywordNetwork: keywordNetworkReducer,
  },
})

export type AppDispatch = typeof store.dispatch
