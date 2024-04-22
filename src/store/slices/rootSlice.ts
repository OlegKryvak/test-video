import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface State {
  currentTime: number | null;
  videoCurrentIndex: number | null;
}

const initialState: State = {
  currentTime: null,
  videoCurrentIndex: null,
};

export const rootSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveCurrentTime(state, action: PayloadAction<number | null>) {
      state.currentTime = action.payload;
    },
    saveVideoIndex(state, action: PayloadAction<number | null>) {
      state.videoCurrentIndex = action.payload;
    },
  },
});

export const {saveCurrentTime, saveVideoIndex} = rootSlice.actions;

export default rootSlice.reducer;
