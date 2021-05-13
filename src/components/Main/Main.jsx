import React from 'react'
import './Main.css'
import AverageHeader from '../utilcomponents/AverageHeader/AverageHeader'
import BestPrice from '../utilcomponents/Banner/BestPrice'
import Banner from '../utilcomponents/Banner/Banner'
import Table from '../utilcomponents/Table/Table'

const Main = (props) => {
    var style={}
    if (props.state == '#191D28') {
      style={ backgroundColor: props.state ,color:'white'}
    }
    return (
        <div className="main">
            <div className="flex space-between nrml-padding">
                <AverageHeader per={"0.15 %"} time={"9 Mins" }/>
                <AverageHeader per={"0.47 %"} time={"1 Mins" }/>
                <BestPrice style={style}/>
                <AverageHeader per={"0.13 %"} time={"3 Mins" }/>
                <AverageHeader per={"0.47 %"} time={"5 Mins" }/>
            </div>
            <Banner location={"banner.png"}/>
            <Table  state={props.state} />
            <Banner location={"footerbanner.png"} />
            
    
    </div>
        
    )
}

export default Main
