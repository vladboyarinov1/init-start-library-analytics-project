import { RequestStatus } from '@/common/types/common-types'
import { createAction } from '@reduxjs/toolkit'

const setLoadingStatus = createAction<{ status: RequestStatus }>('appActions/setLoadingStatus')
const setError = createAction<{ error: null | string }>('appActions/setError')
const setLinearProgress = createAction<{ value: boolean | null }>('appActions/setLinearProgress')

export const appActions = {
  setError,
  setLinearProgress,
  setLoadingStatus,
}
