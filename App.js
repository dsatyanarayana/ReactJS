/*<div class="parent">
    <div class="child">
        <h1>Hello</h1>
    </div>
</div>*/

const heading = React.createElement(
    "div",
    {
        id:"parent"
    },
    [
        React.createElement("div",{id:"child1"},React.createElement("h1",{id:"heading1"},"Hello World")),
        React.createElement("div",{id:"child2"},React.createElement("h1",{id:"heading2"},"Hello World2"))
    ]

    /*"Hello World From React JS"*/
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
