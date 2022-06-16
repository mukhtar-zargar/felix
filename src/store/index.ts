import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import themeSlice from "./theme.slice";
import userSlice from "./user.slice";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    themeDetails: themeSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
