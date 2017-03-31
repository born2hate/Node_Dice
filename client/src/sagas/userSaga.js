import 'babel-polyfill';
import { socketEmit } from '../utils/socketIoHelper';
//import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { takeEvery } from "redux-saga/effects";

function* loginUser(action) {
    yield socketEmit('loginUser', { userName: action.userName, password: action.password });
}
function* signupUser(action) {
    yield socketEmit('newUser', { userName: action.userName, password: action.password });
}
 
function* userSaga() {
    return yield [
        takeEvery("SIGNUP_USER", signupUser),
        takeEvery("LOGIN_USER", loginUser)
    ];

}

export default userSaga;