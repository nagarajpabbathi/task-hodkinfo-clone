import React from 'react'

const TableRow = (props) => {
  var style={}
  if (props.state == '#191D28') {
    style={ backgroundColor: props.state ,color:'white'}
  }
    return (
        <tr classNameName="tr" style={style}>
        <td className="td">1</td>
        <td className="td">Wazirx</td>
        <td className="td">₹ 41,30,483</td>
        <td className="td">₹ 41,12,057 / ₹ 41,30,483</td>
        <td className="td green">6.55 %</td>
        <td className="td green">▲ ₹ 2,53,777</td>
      </tr>
    )
}

export default TableRow
