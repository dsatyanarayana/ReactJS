import { useEffect } from "react";

const AboutUs = ()=>{
    useEffect(()=>{
        console.log("About US");
        return()=>{
            console.log("WilUnmount About US :)");
        }
    
    },[])
    return (
        <div>
            <h1>About Us</h1>
            <h2>Swiggy Food Privated Limited</h2>
            <h3>Kakinada-533001</h3>
        </div>
    )
}
export default AboutUs;