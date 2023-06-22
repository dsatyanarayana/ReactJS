import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = ()=>{    
    const [btnName,setBtnName] = useState("Login");
    useEffect(()=>{
        console.log("UseEffect Called");
    },[btnName])
    

    return (
        <div className="res-header">
        <div className="res-header-logo">
            <img alt="res-logo" src={LOGO_URL}/>
        </div>
        <div className="res-header-navlist">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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