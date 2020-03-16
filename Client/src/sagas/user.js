import { all, fork, takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from 'reducers/user';

//Login
function loginAPI() {
    //서버에 요청을 보내게 될 부분
    return axios.post('/login');
}

function* login() {
  try {
      yield call(loginAPI);
      yield put({
          type: LOG_IN_SUCCESS
      })
  } catch (e) {
    console.log(e);
    yield put({
        type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

//SignUp
function signUpAPI() {
  //서버에 요청을 보내게 될 부분
}

function* signUp() {
try {
    yield call(signUpAPI);
    yield put({
        type: SIGN_UP_SUCCESS
    })
} catch (e) {
  console.log(e);
  yield put({
      type: SIGN_UP_FAILURE
  })
}
}

function* watchSignup() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignup)
  ]);
}
