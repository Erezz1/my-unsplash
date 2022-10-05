import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
    isLoading: boolean;
}

const initialState: ImageState = {
    isLoading: false,
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,

    reducers: {
        endLoading: ( state ) => {
            state.isLoading = false;
        },

        startLoading: ( state ) => {
            state.isLoading = true;
        }
    },
})

export const { endLoading, startLoading } = urlSlice.actions;

export default urlSlice.reducer;
