import React from 'react'

const Banner = (props) => {
    return (
        <div>
            <div className="over-padding">
            <img src={'./'+props.location} alt="" className="banner" />
            </div>
        </div>
    )
}

export default Banner
