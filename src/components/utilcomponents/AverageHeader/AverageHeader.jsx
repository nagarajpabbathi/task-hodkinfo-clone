import React from 'react'
import './AverageHeader.css'

const AverageHeader = (props) => {
    return (
        <div className="flex">
             <div className="flex">
            <div className="flex-col">
                    <p className="green-head">{ props.per}</p>
                    <p className="grey-light">{props.time}</p>
            </div>
        </div>
        </div>
    )
}

export default AverageHeader
