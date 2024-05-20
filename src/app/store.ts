import { loadState, saveState } from '@/common/utils/localstorage-utils.ts'
import { breadCrumbsReducer } from '@/components/ui/components/breadcrumbs'
import { editionsPubKeyAnalysisReducer } from '@/components/ui/pages/editions-pub-key-analysis-api'
import { keywordNetworkReducer } from '@/components/ui/pages/keyword-network'
import { configureStore } from '@reduxjs/toolkit'

// Определение типа состояния приложения
type RootState = {
  breadCrumbs: ReturnType<typeof breadCrumbsReducer>
  editionsPubKeyAnalysis: ReturnType<typeof editionsPubKeyAnalysisReducer>
  keywordNetwork: ReturnType<typeof keywordNetworkReducer>
}

// Загрузка состояния из localStorage
const preloadedState: RootState | undefined = loadState()

export const store = configureStore({
  preloadedState,
  reducer: {
    breadCrumbs: breadCrumbsReducer,
    editionsPubKeyAnalysis: editionsPubKeyAnalysisReducer,
    keywordNetwork: keywordNetworkReducer,
  },
})

// Подписка на изменения состояния для сохранения в localStorage
store.subscribe(() => {
  const state: RootState = store.getState()

  saveState({
    breadCrumbs: state.breadCrumbs,
    // editionsPubKeyAnalysis: state.editionsPubKeyAnalysis, // Закомментировано, если не нужно сохранять
    // keywordNetwork: state.keywordNetwork, // Закомментировано, если не нужно сохранять
  })
})

// Тип для диспатча
export type AppDispatch = typeof store.dispatch
