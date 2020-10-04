import React from "react";
import "./App.css";

const App = (props) => {
    console.log(props.idag);
    return (
        <section className="kalenderBlad">
            <div className="year">2010</div>
            <div className="week">v 3</div>
            <div className="weekday">Onsdag</div>
            <div className="date">15</div>
            <div className="month">Januari</div>
            <div className="names">Helga, Helge</div>
            <div className="additional">{props.children}</div>
        </section>
    );
};

export default App;
