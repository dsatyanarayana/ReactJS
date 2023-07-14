import ContactUsClass from "./ContactUsClass";
import React from "react";
class ContactUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Loading...",
                location:"Loading..."
            }
        }
        //console.log("Parent Constructer");
    }
    async componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Timer");
        },1000)
        //API Calling.
        const data = await fetch("https://api.github.com/users/dsatyanarayana");
        const json = await data.json();
        //console.log(json);
        this.setState({
            userInfo:json
        })
        console.log("Parent componentDidMount");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("ComponentWillUnmount Called");
    }
    render(){
        const {id,login,avatar_url} = this.state.userInfo;
        console.log(this.state);
        return (
            <div>
                <ContactUsClass name={id} address={login} img={avatar_url}/>
            </div>
        )
    }
}


export default ContactUs;