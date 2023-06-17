import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppLayout from "./components/AppLayout";

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
