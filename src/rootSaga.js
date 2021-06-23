import { fork } from 'redux-saga/effects';
import { createNewOrderFlow } from './sagas/inputSaga';

export default function* rootSaga() {
  yield fork(createNewOrderFlow)
}