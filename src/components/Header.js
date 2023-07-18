import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{    
    const [btnName,setBtnName] = useState("Login");
    useEffect(()=>{
        console.log("UseEffect Called");
    },[btnName])
    const onlineStatus = useOnlineStatus();
    return (
        <div className="res-header">
        <div className="res-header-logo">
            <img alt="res-logo" src={LOGO_URL}/>
        </div>
        <div className="res-header-navlist">
            <ul>
                <li>{onlineStatus?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li>
                    <button className="loginBtn" onClick={()=>{
                        (btnName=="Login")?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnName} </button>
                </li>
            </ul>
        </div>
        </div>
    );
}
export default Header;