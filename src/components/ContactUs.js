import ContactUsClass from "./ContactUsClass";
import React from "react";
class ContactUs extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructer");
    }
    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        return (
            <div>
                <ContactUsClass name={"First"} address={"Divili"} mobile={"47890"}/>
                <ContactUsClass name={"Second"} address={"Kakinada"} mobile={"9491224433"}/>
                <ContactUsClass name={"Three"} address={"Kakinada"} mobile={"9491224433"}/>
            </div>
        )
    }
}


export default ContactUs;