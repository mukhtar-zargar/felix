import { call, put, takeLatest } from "redux-saga/effects";
import { nanoid } from "nanoid";

import { getUser, updateUser } from "../store/user.slice";
import { getUserRequest } from "../services/user.service";
import { IUser } from "../models/user.model";
import { addUser } from "../store/userList.slice";

export function* handleGetUser(): any {
  try {
    const response = yield call(getUserRequest);
    const {
      data: { results },
    } = response;
    const result = results[0];

    const user: IUser = {
      // ...data.results[0],
      id: nanoid(),
      email: result?.email,
      password: result?.email, // Dummy password
      name: `${result?.name.first} ${result?.name.last}`,
      picture: result?.picture?.large,
      address: `${result?.location?.city}, ${result?.location?.state}`,
      gender: result?.gender,
      phone: result?.phone,
    };

    yield put(addUser(user));
  } catch (err) {
    console.log(err);
  }
}

export const userSaga = [takeLatest(getUser.type, handleGetUser)];
