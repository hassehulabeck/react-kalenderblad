import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Child from "./Child";

const idag = new Date();

ReactDOM.render(
    <App idag={idag} names={"Frank, Frans"}>
        <ol>
            <li>Repetition React</li>
            <li>JSX och children</li>
            <li>Handledn. projekt</li>
        </ol>
        <Child />
    </App>,
    document.getElementById("root")
);
