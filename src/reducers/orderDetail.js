import { actionTypes } from '../common/actionTypes'

const initialState = {
  orderDetail: {
        orderId: '',
        userName: '',
        address: '',
        dueDate: null,
        redSquare: 0,
        blueSquare: 0,
        yellowSquare: 0,
        redTriangle: 0,
        blueTriangle: 0,
        yellowTriangle: 0,
        redCircle: 0,
        blueCircle: 0,
        yellowCircle: 0
  },
  showReport: false
};

function updateOrderDetail(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: action.data
      }
    case actionTypes.UPDATE_SHOW_REPORT:
      return {
        ...state,
        showReport: action.value
      }
    default:
      return state
  }
}

export default updateOrderDetail;