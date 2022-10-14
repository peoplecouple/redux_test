import { configureStore, createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
  name: "num",
  initialState: 1,
  reducers: {
    Up: (state) => state + 1
  }
})

const modeSlice = createSlice({
  name: "mode",
  initialState: false,
  reducers: {
    Change: (state) => !state
  }
})

const inputSlice = createSlice({
  name: "input",
  initialState: [],
  reducers: {
    Create: (state, action) => {state.push(action.payload)}
  }
})

const store = configureStore({
  reducer: {
    num: numSlice.reducer,
    mode: modeSlice.reducer,
    input: inputSlice.reducer
  }
});

export const { Up } = numSlice.actions
export const { Change } = modeSlice.actions
export const { Create } = inputSlice.actions
export default store