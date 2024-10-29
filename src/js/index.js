//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

//render your react application
let counter = 0;

setInterval(function() {
    counter++;
    root.render(<SecondsCounter seconds={counter} />);
}, 1000);

console.log("hola") 

