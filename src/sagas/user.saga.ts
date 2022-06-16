import { call, put, takeLatest } from "redux-saga/effects";
import { getUser, updateUser } from "../store/user.slice";
import { getUserRequest } from "../services/user.service";
import { IUser } from "../types/user.types";

export function* handleGetUser(): any {
  try {
    const response = yield call(getUserRequest);
    const { data } = response;
    const user: IUser = {
      ...data.results[0],
      name: `${data.results[0]?.name.first} ${data.results[0]?.name.last}`,
      picture: data.results[0]?.picture?.large,
      address: `${data.results[0]?.location?.city}, ${data.results[0]?.location?.state}`,
    };

    yield put(updateUser(user));
  } catch (err) {
    console.log(err);
  }
}

export const userSaga = [takeLatest(getUser.type, handleGetUser)];
