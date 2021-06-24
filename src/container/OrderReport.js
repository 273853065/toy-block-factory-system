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
    key: 'colorShape'    
  },
  {
    title: 'Red',
    dataIndex: 'red',
    key: 'red'
  },
  {
    title: 'Blue',
    dataIndex: 'blue',
    key: 'blue'
  },
  {
    title: 'Yellow',
    dataIndex: 'yellow',
    key: 'yellow'
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
  amountThusandth(amount) {
    return amount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
  }
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
      key: 1,
      colorShape: 'Square',
      red: redSquare === 0 ? '-' : this.amountThusandth(redSquare),
      blue: blueSquare === 0 ? '-' : this.amountThusandth(blueSquare),
      yellow: yellowSquare === 0 ? '-' : this.amountThusandth(yellowSquare)
    },
    {
      key: 2,
      colorShape: 'Triangle',
      red: redTriangle === 0 ? '-' : this.amountThusandth(redTriangle),
      blue: blueTriangle === 0 ? '-' : this.amountThusandth(blueTriangle),
      yellow: yellowTriangle === 0 ? '-' : this.amountThusandth(yellowTriangle)
    },
    {
      key: 3,
      colorShape: 'Circle',
      red: redCircle === 0 ? '-' : this.amountThusandth(redCircle),
      blue: blueCircle === 0 ? '-' : this.amountThusandth(blueCircle),
      yellow: yellowCircle === 0 ? '-' : this.amountThusandth(yellowCircle)
    }];
    let squareCount = redSquare + blueSquare + yellowSquare;
    let triangleCount = redTriangle + blueTriangle + yellowTriangle;
    let trianglePrice = triangleCount * 2;
    let cicleCount = redCircle + blueCircle + yellowCircle;
    let ciclePrice = cicleCount * 3;
    let redPaintCount = redSquare + redCircle + redTriangle;
    let totalPrice = squareCount + trianglePrice + ciclePrice + redPaintCount;
    let quantityData = [{
      key: 1,
      shapeCount: 'Square',
      qty: this.amountThusandth(squareCount)
    },
    {
      key: 2,
      shapeCount: 'Triangle',
      qty: this.amountThusandth(triangleCount)
    },
    {
      key: 3,
      shapeCount: 'Circle',
      qty: this.amountThusandth(cicleCount)
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
        squareCount: this.amountThusandth(squareCount),
        squarePrice: this.amountThusandth(squareCount),
        triangleCount: this.amountThusandth(triangleCount),
        trianglePrice: this.amountThusandth(trianglePrice),
        cicleCount: this.amountThusandth(cicleCount),
        ciclePrice: this.amountThusandth(ciclePrice),
        redPaintCount: this.amountThusandth(redPaintCount),
        redPaintPrice: this.amountThusandth(redPaintCount),
        totalPrice: this.amountThusandth(totalPrice)
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