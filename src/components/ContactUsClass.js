import React from "react";
class ContactUsClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        const {name,address,mobile} = this.props;
        return(
            <div>
                <h1>Contact us</h1>
                <h3>{name}</h3>
                <h2>{address}</h2>
                <h2>{mobile}.</h2>                               
            </div>
        )
    }
}

export default ContactUsClass;