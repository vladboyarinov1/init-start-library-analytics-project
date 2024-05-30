export { Dynamics } from './ui/dynamics'

import { asyncActions as dynamicsActions, slice as dynamicsSlice } from './model/dynamics-slice.ts'

const dynamicsSliceActions = {
  ...dynamicsActions,
  ...dynamicsSlice.actions,
}

const dynamicsReducer = dynamicsSlice.reducer

export { dynamicsReducer, dynamicsSliceActions }
