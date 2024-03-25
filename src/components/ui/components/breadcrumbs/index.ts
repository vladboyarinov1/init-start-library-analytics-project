import { slice } from './breadcrumbs-slice'

const breadCrumbsReducer = slice.reducer
const actions = slice.actions
const appActions = {
  ...actions,
}

export { appActions, breadCrumbsReducer }
