import { slice } from './breadcrumbs-slice'

const breadCrumbsReducer = slice.reducer
const actions = slice.actions
const appActions = {
  ...actions,
}

export { appActions, breadCrumbsReducer }

// import {
//   asyncActions as BreadcrumbAsyncActions,
//   slice as breadcrumbSlice,
// } from './breadcrumbs-slice.ts'
//
// const breadcrumbActions = {
//   ...BreadcrumbAsyncActions,
//   ...breadcrumbSlice.actions,
// }
// const breadcrumbReducer = breadcrumbSlice.reducer
//
// export { breadcrumbActions, breadcrumbReducer }
