import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
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
            </ul>
        </div>
        </div>
    );
}
export default Header;