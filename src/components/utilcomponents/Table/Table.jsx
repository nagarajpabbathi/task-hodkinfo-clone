import React from 'react'
import './Table.css'
import TableRow from './TableRow/TableRow'

const Table = (props) => {
  var style={}
  if (props.state == '#191D28') {
    style={ backgroundColor: props.state ,borderRadius:0}
  }
    return (
        <div>
            
    <table  className="w-full pa ">
      <thead className="bg-gray-50">
        <tr className='ml' id="some" >
          <th className="th" style={style}>#</th>
          <th className="th  " style={style}>Platform</th>
          <th className="th  " style={style}>Last Traded Price</th>
          <th className=" th "style={style}>Buy/Sell Price</th>
          <th className=" th "style={style}>Differences</th>
          <th className=" th "style={style}>Savings</th>
        </tr>
      </thead>  
      <tbody className="tbody">
       
          <TableRow state={props.state}/>
      <TableRow state={props.state} />
      <TableRow state={props.state}/>
      <TableRow state={props.state}/>
      <TableRow state={props.state}/>
      <TableRow state={props.state}/>
 
        
      </tbody>
    </table>
  </div>
    
    )
}

export default Table
