import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Namaste React!!!");
// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(heading);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React!!!!</h1>
  </div>
);

const Title = () => <h2>Sub Heading</h2>;

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<HeadingComponent />);
