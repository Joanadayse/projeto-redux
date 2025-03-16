import { all , takeEvery , call , put , delay} from "redux-saga/effects";
import {fectchUserFail , fetchUserSucess} from "./slice"
import axios from "axios";

// https://jsonplaceholder.typicode.com/users/

function* fetchUser(){

    try{

        yield delay(2000);
        const response= yield call(axios.get,"https://jsonplaceholder.typicode.com/users/")
    yield put(fetchUserSucess(response.data))

    }catch(error){
        yield put(fectchUserFail(error.message))

    }
}

export default function* userSaga() {
  yield all([takeEvery("user/fetchUser", fetchUser)]);
}

