import { slice } from './breadcrumbs-slice.ts'

const breadCrumbsReducer = slice.reducer
const actions = slice.actions
const appActions = {
  ...actions,
}

export { appActions, breadCrumbsReducer }
