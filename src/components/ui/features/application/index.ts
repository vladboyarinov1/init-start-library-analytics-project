import * as appSelectors from './application-selectors'
import { slice } from './application-slice'

const appReducer = slice.reducer
const actions = slice.actions
const appActions = {
  ...actions,
}

export { appActions, appReducer, appSelectors }
