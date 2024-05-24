export { KeywordNetwork } from './ui/keyword-network'

import {
  asyncActions as keywordNetworkAsyncActions,
  slice as keywordNetworkAsyncSlice,
} from './model/keyword-network-slice'

const keywordNetworkActions = {
  ...keywordNetworkAsyncActions,
  ...keywordNetworkAsyncSlice.actions,
}
const keywordNetworkReducer = keywordNetworkAsyncSlice.reducer

export { keywordNetworkActions, keywordNetworkReducer }
