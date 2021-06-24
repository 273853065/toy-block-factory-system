import { put, call, take, select } from 'redux-saga/effects'
import {actionTypes} from '../common/actionTypes'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* createNewOrder(value) {
  try {
    yield call(delay, 500);
    return value
  } catch (err) {
    yield put({
      type: actionTypes.ERROR
    });
  }
}

export function* createNewOrderFlow() {
  while (true) {
    let request = yield take(actionTypes.CREATE_NEW_ORDER);
    let response = yield call(createNewOrder, request.value);
    response.orderId = parseInt(Math.random() * 100000).toString();
    yield put({
      type: actionTypes.UPDATE_ORDER_DETAIL,
      data: response
    });
  }
}