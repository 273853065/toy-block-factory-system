import React, { Component } from 'react';
import { Row, Col } from 'antd';

class TotalReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
        squarePrice = 0,
        squareCount = 0,
        triangleCount = 0,
        trianglePrice = 0,
        cicleCount = 0,
        ciclePrice = 0,
        redPaintCount = 0,
        redPaintPrice = 0,
        totalPrice = 0
    } = this.props.totalReport;

    return (
        <div className="mt20 total-price-report">
          <Row gutter={24}>
            <Col span={4}>
              <lable>Squares</lable>
            </Col>
            <Col span={20}>
              <div>{`${squareCount} @ $1 ppi = $${squarePrice}`}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Triangles</lable>
            </Col>
            <Col span={20}>
              <div>{`${triangleCount} @ $2 ppi = $${trianglePrice}`}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Circles</lable>
            </Col>
            <Col span={20}>
              <div>{`${cicleCount} @ $3 ppi = $${ciclePrice}`}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Red color surcharge</lable>
            </Col>
            <Col span={20}>
              <div>{`${redPaintCount} @ $1 ppi = $${redPaintPrice}`}</div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <lable>Total:</lable>
            </Col>
            <Col span={20}>
              <div>{`$${totalPrice}`}</div>
            </Col>
          </Row>
        </div>
    )
  }
}

export default TotalReport;