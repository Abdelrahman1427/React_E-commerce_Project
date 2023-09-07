import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0 
}

  const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCounter(state, action) {
      state.counter = state.counter+ action.payload
    },
    decreaseCounter(state, action) {
        state.counter = state.counter - action.payload
    }
    }
  }
)
// action for component
export const { increaseCounter, decreaseCounter} = counterSlice.actions
// for store 
export default counterSlice.reducer