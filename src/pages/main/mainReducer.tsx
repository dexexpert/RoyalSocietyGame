import { createSlice } from '@reduxjs/toolkit'
import store from '../../store';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    scale: 0.4,
    position: {
      x: (window.screen.width-1500)/2,
      y: 0,
    }
  },
  reducers: {
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setScale: (state, action) => {
      state.scale = action.payload
    },
  },
})

export const { setPosition, setScale } = mainSlice.actions
export type RootState = ReturnType<typeof store.getState>

export const selectScale = (state:RootState) => state.main.scale
export const selectPosition = (state:RootState) => state.main.position

export default mainSlice.reducer
