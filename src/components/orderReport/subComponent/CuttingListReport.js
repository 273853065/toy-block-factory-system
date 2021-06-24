import React, { Component } from 'react';
import UserInfo from '../cellComponent/UserInfo';
import TableReport  from '../cellComponent/TableReport';

class CuttingListReport extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { 
      userInfo,
      tableReport
     } = this.props.cuttingListReport;
    return (
      <div className="text-left mt20">
        <hr className="bg-gray-hr" />
        <h3>Your cutting list has been generated:</h3>
        <UserInfo userInfo={userInfo} />
        <TableReport tableReport={tableReport} />
      </div>
    )
  }
}

export default CuttingListReport;