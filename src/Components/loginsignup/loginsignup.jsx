import React, { useState } from "react";
import './indexlogin.css'

import User from '../Assests/icon.png'
import Eimg from '../Assests/email(1).png'
import pwd from  '../Assests/padlock.png'


const Loginsignup = () => {

    const [action,setAction] = useState("Login")

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="inputs">
                {action=="Login"?<div></div>:<div className="input">
                    <img src={User} alt="" />
                    <input type="text" placeholder="Username" />
                </div>}
                
                <div className="input">
                    <img src={Eimg} alt="" />
                    <input type="email" placeholder="Email" />

                </div>
                <div className="input">
                    <img src={pwd} alt="" />
                    <input type="password" placeholder="Password" />

                </div>
            </div>
            {action=="Sign Up"?<div></div>:<div className="f-pwd">Forgot password: <span>Click  here</span></div>}
            

            <div className="submit-container">
                <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default Loginsignup

