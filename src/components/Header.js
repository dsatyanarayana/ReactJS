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
        <div className="flex justify-between bg-gray-50">
        <div className="w-20">
            <img alt="res-logo" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">{onlineStatus?"🟢":"🔴"}</li>
                <li className="px-4 underline"><Link to="/">Home</Link></li>
                <li className="px-4 underline"><Link to="/about">About Us</Link></li>
                <li className="px-4 underline"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 underline">Cart</li>
                <li className="px-4 underline">
                    <button className="" onClick={()=>{
                        (btnName=="Login")?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnName} </button>
                </li>
            </ul>
        </div>
        </div>
    );
}
export default Header;