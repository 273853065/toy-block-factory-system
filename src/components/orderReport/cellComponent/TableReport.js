import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

class TotalReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
        tableData,
        tableColumn
    } = this.props.tableReport;

    return (
        <div className="mt20 table-report">
          <Table columns={tableColumn} pagination={false} dataSource={tableData} />
        </div>
    )
  }
}

export default TotalReport;