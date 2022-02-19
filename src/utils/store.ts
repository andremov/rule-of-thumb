// @ts-ignore
import { configureStore } from '@reduxjs/toolkit'
import pollReducer from './pollSlice'
import { StoreInterface } from './types'

const store: StoreInterface = configureStore({
    reducer: {
        polls: pollReducer,
    },
})

export default store
