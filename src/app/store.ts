import { loadState, saveState } from '@/common/utils/localstorage-utils'
import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { dynamicsReducer } from '@/components/ui/pages/dynamics'
import { editionsPubKeyAnalysisReducer } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { keywordNetworkReducer } from '@/components/ui/pages/keyword-network'
import { orgAnalysisReducer } from '@/components/ui/pages/org-analysis'
import { pubKeywordsReducer } from '@/components/ui/pages/publications-keywords'
import { configureStore } from '@reduxjs/toolkit'

type RootState = {
  breadCrumbs: ReturnType<typeof breadCrumbsReducer>
  dynamics: ReturnType<typeof dynamicsReducer>
  editionsPubKeyAnalysis: ReturnType<typeof editionsPubKeyAnalysisReducer>
  keywordNetwork: ReturnType<typeof keywordNetworkReducer>
  orgAnalysis: ReturnType<typeof orgAnalysisReducer>
  pubKeywords: ReturnType<typeof pubKeywordsReducer>
}

const preloadedState: RootState | undefined = loadState()

export const store = configureStore({
  preloadedState,
  reducer: {
    breadCrumbs: breadCrumbsReducer,
    dynamics: dynamicsReducer,
    editionsPubKeyAnalysis: editionsPubKeyAnalysisReducer,
    keywordNetwork: keywordNetworkReducer,
    orgAnalysis: orgAnalysisReducer,
    pubKeywords: pubKeywordsReducer,
  },
})

store.subscribe(() => {
  const state: RootState = store.getState()

  saveState({
    breadCrumbs: state.breadCrumbs,
  })
})

export type AppDispatch = typeof store.dispatch
