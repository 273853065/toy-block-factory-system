import React, { Component } from 'react';

class TotalReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
        squareCount = 0,
        triangleCount = 0,
        trianglePrice = 0,
        cicleCount = 0,
        ciclePrice = 0,
        redPaintCount = 0,
        totalPrice = 0
    } = this.props.totalReport;

    return (
        <div className="mt20 total-price-report">
          <div>{`Squares ${squareCount} @ $1 ppi = $${squareCount}`}</div>
          <div>{`Triangles ${triangleCount} @ $2 ppi = $${trianglePrice}`}</div>
          <div>{`Circles ${cicleCount} @ $3 ppi = $${ciclePrice}`}</div>
          <div>{`Red color surcharge ${redPaintCount} @ $1 ppi = $${redPaintCount}`}</div>
          <div>{`Total: $${totalPrice}`}</div>
        </div>
    )
  }
}

export default TotalReport;