import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InvoiceReport from '../components/orderReport/subComponent/InvoiceReport';
import CuttingListReport from '../components/orderReport/subComponent/CuttingListReport';
import PaintingReport from '../components/orderReport/subComponent/PaintingReport';

const colorShapeColumn = [
  {
    title: '',
    dataIndex: 'colorShape',
    key: 'colorShape',
  },
  {
    title: 'Red',
    dataIndex: 'red',
    key: 'red',
  },
  {
    title: 'Blue',
    dataIndex: 'blue',
    key: 'blue',
  },
  {
    title: 'Yellow',
    dataIndex: 'yellow',
    key: 'yellow',
  }
];

const quantityColumn = [
  {
    title: '',
    dataIndex: 'shapeCount',
    key: 'shapeCount',
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    key: 'qty',
  }
];

class OrderReport extends Component {
  render() {
    const {
      orderDetail: {
        orderId = '',
        userName = '',
        address = '',
        dueDate = null,
        redSquare = 0,
        blueSquare = 0,
        yellowSquare = 0,
        redTriangle = 0,
        blueTriangle = 0,
        yellowTriangle = 0,
        redCircle = 0,
        blueCircle = 0,
        yellowCircle = 0
      },
      showReport = false
    } = this.props;
    let colorShapeData = [{
      colorShape: 'Square',
      red: redSquare === 0 ? '-' : redSquare,
      blue: blueSquare === 0 ? '-' : blueSquare,
      yellow: yellowSquare === 0 ? '-' : yellowSquare
    },
    {
      colorShape: 'Triangle',
      red: redTriangle === 0 ? '-' : redTriangle,
      blue: blueTriangle === 0 ? '-' : blueTriangle,
      yellow: yellowTriangle === 0 ? '-' : yellowTriangle
    },
    {
      colorShape: 'Circle',
      red: redCircle === 0 ? '-' : redCircle,
      blue: blueCircle === 0 ? '-' : blueCircle,
      yellow: yellowCircle === 0 ? '-' : yellowCircle
    }];
    let squareCount = redSquare + blueSquare + yellowSquare;
    let triangleCount = redTriangle + blueTriangle + yellowTriangle;
    let trianglePrice = triangleCount * 2;
    let cicleCount = redCircle + blueCircle + yellowCircle;
    let ciclePrice = cicleCount * 3;
    let redPaintCount = redSquare + redCircle + redTriangle;
    let totalPrice = squareCount + trianglePrice + ciclePrice + redPaintCount;
    let quantityData = [{
      shapeCount: 'Square',
      qty: squareCount
    },
    {
      shapeCount: 'Triangle',
      qty: triangleCount
    },
    {
      shapeCount: 'Circle',
      qty: cicleCount
    }];
    let userInfo = {
      orderId,
      userName,
      address,
      dueDate
    }
    let invoiceReport = {
      userInfo,
      tableReport: {
        tableData: colorShapeData,
        tableColumn: colorShapeColumn
      },
      totalReport: {
        squareCount,
        triangleCount,
        trianglePrice,
        cicleCount,
        ciclePrice,
        redPaintCount,
        totalPrice
      }
    };
    let cuttingListReport = {
      userInfo,
      tableReport: {
        tableData: quantityData,
        tableColumn: quantityColumn
      }
    }
    let paintingReport = {
      userInfo,
      tableReport: {
        tableData: colorShapeData,
        tableColumn: colorShapeColumn
      }
    }
    return (
      <div>
        {showReport && <InvoiceReport invoiceReport={invoiceReport} />}
        {showReport && <CuttingListReport cuttingListReport={cuttingListReport} />}
        {showReport && <PaintingReport paintingReport={paintingReport} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orderDetail: state.updateOrderDetail.orderDetail,
    showReport: state.updateOrderDetail.showReport
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderReport);