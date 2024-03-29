import { useMemo } from 'react'

import { useAppDispatch } from '@/common/hooks/use-app-dispatch'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
  const dispatch = useAppDispatch()
  const boundActions = useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [])

  return boundActions
}
