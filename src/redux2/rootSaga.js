import {all,call} from 'redux-saga/effects';
import userSaga from './User/userSaga';

export default function* rootSaga(){
    yield all([call(userSaga)])
}