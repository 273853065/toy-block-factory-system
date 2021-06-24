import { actionTypes } from '../common/actionTypes'

export function createNewOrder(value) {
  return {
    type: actionTypes.CREATE_NEW_ORDER,
    value
  }
}

export function updateShowReport(value) {
  return {
    type: actionTypes.UPDATE_SHOW_REPORT,
    value
  }
}