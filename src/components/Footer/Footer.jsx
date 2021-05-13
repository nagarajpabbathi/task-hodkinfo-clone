import React from 'react'
import  './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className='flex space-between footer'>
            <div className="flex">
                <p className="footer-nav grey">Copyright © 2019</p>
                <p className="footer-nav grey">HodlInfo.com</p>
                <p className="footer-nav grey">Developed By <span className="green">QuadBTech</span></p>
            </div>
            <p className="footer-nav grey">Support</p>
            </div>
            <div className="stick-footer">
                <button className="stickfooter-btn green">Add hodlinfo to home screen</button>
            </div>
            </div>
    )
}

export default Footer
