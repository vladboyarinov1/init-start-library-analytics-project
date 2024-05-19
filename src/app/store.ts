// import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { loadState, saveState } from '@/common/utils/localstorage-utils.ts'
import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { editionsPubKeyAnalysisReducer } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { keywordNetworkReducer } from '@/components/ui/pages/keyword-network'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    breadCrumbs: breadCrumbsReducer,
    editionsPubKeyAnalysis: editionsPubKeyAnalysisReducer,
    keywordNetwork: keywordNetworkReducer,
  },
})

store.subscribe(() => {
  saveState({
    breadCrumbs: store.getState().breadCrumbs,
    // editionsPubKeyAnalysis: store.getState().editionsPubKeyAnalysis,
    // keywordNetwork: store.getState().keywordNetwork,
  })
})

export type AppDispatch = typeof store.dispatch
