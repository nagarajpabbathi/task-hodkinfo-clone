import React from 'react'
import './Header.css'

const Header = (props) => {
    const changeHandler = () => {
        props.themeChange()
    }
  
    return (
        <div className="header" style={{ backgroundColor: props.state }}>
            <div className='logo-container'> 
                <img src="./logo.png" alt="" className="logo" />
                <p className="sub-logo grey">Powered By <span className="green">Finstreet</span></p>
            </div>
            <div className='btn-containers'>
                <button className="btn rounded dropdown">INR</button>
                <button className="btn rounded dropdown">BTC</button>
                <button className="btn rounded ">BUY BTC</button>
            </div>
            <div className='flex'>
                <div className="counter">.</div>
                <button className="btn rounded bg-green"><img src="./telegram.png" alt="" className="telegram-logo" />Connect Telegram</button>
                <label className="switch">
                    <input className='checkbox' type="checkbox" name="" id="" onChange={changeHandler}/>
                    <span className="slider round"></span>
               </label>
            </div>
        </div>
    )
}

export default Header
