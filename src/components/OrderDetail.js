import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class OrderDetail extends Component {
  render() {
    const { orderDetail } = this.props;
    console.log(orderDetail, 'orderDetail');
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orderDetail: state.updateOrderDetail.orderDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);