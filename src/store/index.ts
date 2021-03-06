import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "../sagas";
import themeSlice from "./theme.slice";
import userSlice from "./user.slice";
import userListSlice from "./userList.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    themeDetails: themeSlice,
    user: userSlice,
    userList: userListSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
