import React from 'react'
import './Banner.css'

const BestPrice = (props) => {
    return (
        <div>
           <div className="flex-col">
                <p className="grey size-l">Best Price to Trade</p>
                <h1 className="best-price" style={props.style}>₹ 38,76,706</h1>
                <small className="best-sub grey">Average BTC/INR net price including commision</small>
            </div> 
        </div>
    )
}

export default BestPrice
