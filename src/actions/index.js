import { actionTypes } from '../common/actionTypes'

export function createNewOrder(value) {
  return {
    type: actionTypes.CREATE_NEW_ORDER,
    value
  }
}
