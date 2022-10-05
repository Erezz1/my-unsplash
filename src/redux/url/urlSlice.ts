import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Image } from '@/interfaces';

export interface ImageState {
    imagesList: Image[]
}

const initialState: ImageState = {
    imagesList: [],
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,

    reducers: {
        addImage: ( state, action: PayloadAction<Image> ) => {
            state.imagesList = [ action.payload, ...state.imagesList, ]
        },

        addImageList: ( state, action: PayloadAction<Image[]> ) => {
            state.imagesList = [ ...state.imagesList, ...action.payload ]
        },

        setImageList: ( state, action: PayloadAction<Image[]> ) => {
            state.imagesList = action.payload
        },

        removeImage: ( state, action: PayloadAction<Image> ) => {
            state.imagesList = state.imagesList.filter( image => image.id !== action.payload.id )
        },
    },
})

export const { addImage, addImageList, removeImage, setImageList } = urlSlice.actions;

export default urlSlice.reducer;
