import { all , takeEvery } from "redux-saga/effects";

function* fetchUser(){
    console.log("chamou dentro do saga")
}

export default function* userSaga() {
  yield all([takeEvery("user/fetchUser", fetchUser)]);
}

