import { actionTypes } from '../common/actionTypes'

const initialState = {
  orderDetail: {}
}

function updateOrderDetail(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.data
      }
    default:
      return state
  }
}

export default updateOrderDetail;