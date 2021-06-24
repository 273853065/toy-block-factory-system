import React, { Component } from 'react';
import TotalReport from '../cellComponent/TotalReport';
import UserInfo from '../cellComponent/UserInfo';
import TableReport from '../cellComponent/TableReport';

class InvoiceReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      userInfo,
      tableReport,
      totalReport
    } = this.props.invoiceReport;

    return (
      <div className="text-left mt20">
        <hr className="bg-gray-hr" />
        <h3>Your invoice report has been generated:</h3>
        <UserInfo userInfo={userInfo} />
        <TableReport tableReport={tableReport} />
        <TotalReport totalReport={totalReport} />
      </div>
    )
  }
}

export default InvoiceReport;