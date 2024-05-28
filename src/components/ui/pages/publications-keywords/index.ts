export { PublicationsKeywords } from './ui/publications-keywords'
import {
  asyncActions as pubKeywordsActions,
  slice as pubKeywordsSlice,
} from './model/publications-keywords-slice'

const pubKeywordsSliceActions = {
  ...pubKeywordsActions,
  ...pubKeywordsSlice.actions,
}

const pubKeywordsReducer = pubKeywordsSlice.reducer

export { pubKeywordsReducer, pubKeywordsSliceActions }
