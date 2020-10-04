import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const idag = new Date();

ReactDOM.render(
    <App idag={idag} names={"Bernt, Benny"}>
        Sista dagen för sommardäck
    </App>,
    document.getElementById("root")
);
