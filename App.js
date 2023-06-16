import React from "react";
import ReactDOM from "react-dom/client";

const HeaderLayout = ()=>{
    return (
        <div className="res-header">
        <div className="res-header-logo">
            <img alt="res-logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"/>
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

const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <div className="res-img">
                <img alt="res-img" src="https://t4.ftcdn.net/jpg/05/17/96/89/360_F_517968988_hFHjQT6Flfksjx8n0KxfvMtP2tqlmGKk.jpg"/>
            </div>
            <div className="res-info">
                <h6>Satya Foods</h6>
                <h6>Chinese, Indian</h6>
                <h6>4.3*</h6>
                <h6>Delivery Time: 3hrs</h6>
            </div>
        </div>
    )
}

const BodyLayout = ()=>{
    return (
        <div className="body">
            <div className="body-search">
                Search...
            </div>
            <div className="body-res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}


const AppLayout = ()=>{
    return (
        <div class="layout">
            <HeaderLayout/>
            <BodyLayout/>
        </div>
        );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);




/* 
const heading = <h1>I'm Heading H1 Tag React Element</h1>


const Heading2 = (
    <>
    {heading}
    <h2>I'm Heading h2 React Element</h2>
    </>
)

const Heading3 = ()=>{
    return (<>
    {Heading2}
    <h3>I'm Heading 3 Component</h3>
    </>);
}

const Heading4 = ()=>{
    return (
        <>
            <Heading3></Heading3>
            <Heading3/>
            {Heading3()}
        </>
    )
}

 */




/* //React Element


//const heading = React.createElement("h1",{id:"heading"},"Hello ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));
//Functional component
const HeadingComponent = ()=> <h1>Without Return Heading Component</h1>

const HeadingComponent2 = ()=>{
    return(
    <div>
        <HeadingComponent/>
        <h1>With Return Heading Component2</h1>
    </div>);
};

const heading = <h1>Hello with JSX 2</h1>

root.render(<HeadingComponent2/>);
 */





















/*<div class="parent">
    <div class="child">
        <h1>Hello</h1>
    </div>
</div>*/

// const heading = React.createElement(
//     "div",
//     {
//         id:"parent"
//     },
//     [
//         React.createElement("div",{id:"child1"},React.createElement("h1",{id:"heading1"},"Hello World")),
//         React.createElement("div",{id:"child2"},React.createElement("h1",{id:"heading2"},"Hello World2"))
//     ]

//     /*"Hello World From React JS"*/
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
