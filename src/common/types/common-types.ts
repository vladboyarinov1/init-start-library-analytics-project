import { store } from '@/app/store'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
export type RequestStatus = 'failed' | 'idle' | 'loading' | 'succeeded'
