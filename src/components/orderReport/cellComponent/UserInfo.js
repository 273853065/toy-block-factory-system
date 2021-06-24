import React, { Component } from 'react';
import { Row, Col } from 'antd';

class TotalReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
        orderId,
        userName,
        address,
        dueDate
    } = this.props.userInfo;

    return (
        <div className="user-info">
          <Row gutter={24}>
            <Col span={4}>
              <lable>Name:</lable>
            </Col>
            <Col span={20}>
              <div>{userName}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Address:</lable>
            </Col>
            <Col span={20}>
              <div>{address}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Due date:</lable>
            </Col>
            <Col span={20}>
              <div>{dueDate}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Order #:</lable>
            </Col>
            <Col span={20}>
              <div>{orderId}</div>
            </Col>
          </Row>
        </div>
    )
  }
}

export default TotalReport;