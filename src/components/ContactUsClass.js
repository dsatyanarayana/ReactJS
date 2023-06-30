import React from "react";
class ContactUsClass extends React.Component{
    constructor(props){
        console.log("CONSTRUCTOR "+props.name);
        super(props);
        this.state = {
            name:"satya"
        }
    }
    componentDidMount(){
        console.log("componentDidMount "+this.props.name);
        //console.log("STATE IS "+this.state.name);
    }
    render(){
        console.log("RENDER "+this.props.name);
        this.setState = ({
            name:"Ramesh"
        });
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