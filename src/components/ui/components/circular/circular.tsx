import { useAppSelector } from '@/common/hooks/use-app-selector'
import { applicationSelectors } from '@/components/ui/features/application/application-selectors'
import { Box, CircularProgress } from '@mui/material'

export const Circular = () => {
  const isLoading = useAppSelector(applicationSelectors).isLinearProgress

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 9999,
          }}
        >
          <CircularProgress color={'success'} />
        </Box>
      )}
    </>
  )
}
