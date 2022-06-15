import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import themeSlice from "./theme.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    themeDetails: themeSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

// sagaMiddleware.run();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
