import { actionTypes } from '../common/actionTypes'

const initialState = {
  orderDetail: {
        orderId: '',
        userName: '',
        address: '',
        dueDate: null,
        redSquare: '',
        blueSquare: '',
        yellowSquare: '',
        redTriangle: '',
        blueTriangle: '',
        yellowTriangle: '',
        redCircle: '',
        blueCircle: '',
        yellowCircle: ''
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
      case actionTypes.CLEAR_REPORT_DATA:
      return {
        ...state,
        orderDetail: action.value
      }
    default:
      return state
  }
}

export default updateOrderDetail;