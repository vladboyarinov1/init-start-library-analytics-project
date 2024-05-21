import { loadState, saveState } from '@/common/utils/localstorage-utils'
import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { editionsPubKeyAnalysisReducer } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { keywordNetworkReducer } from '@/components/ui/pages/keyword-network'
import { configureStore } from '@reduxjs/toolkit'

type RootState = {
  breadCrumbs: ReturnType<typeof breadCrumbsReducer>
  editionsPubKeyAnalysis: ReturnType<typeof editionsPubKeyAnalysisReducer>
  keywordNetwork: ReturnType<typeof keywordNetworkReducer>
}

const preloadedState: RootState | undefined = loadState()

export const store = configureStore({
  preloadedState,
  reducer: {
    breadCrumbs: breadCrumbsReducer,
    editionsPubKeyAnalysis: editionsPubKeyAnalysisReducer,
    keywordNetwork: keywordNetworkReducer,
  },
})

store.subscribe(() => {
  const state: RootState = store.getState()

  saveState({
    breadCrumbs: state.breadCrumbs,
  })
})

export type AppDispatch = typeof store.dispatch
