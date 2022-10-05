import { configureStore } from '@reduxjs/toolkit';

import { urlReducer } from './url';
import { uiReducer } from './ui';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    ui: uiReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
