import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/common/types/common-types'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
