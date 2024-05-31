import React from 'react'

import { useAppDispatch } from '@/common/hooks/use-app-dispatch.ts'
import { useAppSelector } from '@/common/hooks/use-app-selector.ts'
import { appActions } from '@/components/ui/features/common-actions'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant={'filled'} {...props} />
})

export const ErrorSnackbar = () => {
  const error = useAppSelector<null | string>(state => state.app.error)
  const dispatch = useAppDispatch()
  const { setError } = appActions

  const handleClose = (_event?: Event | React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(setError({ error: null }))
  }

  return (
    <Snackbar autoHideDuration={3000} onClose={handleClose} open={!!error}>
      <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  )
}
