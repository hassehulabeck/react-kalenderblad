import React from "react";
import "./App.css";

const App = (props) => {
    const weekdays = [
        "Söndag",
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag",
    ];
    const months = [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December",
    ];
    console.log(props.children);
    return (
        <section className="kalenderBlad">
            <div className="year">{props.idag.getFullYear()}</div>
            <div className="week">
                v.
                {Math.floor(
                    props.idag.getUTCDate() + (props.idag.getMonth() * 28) / 7
                )}
            </div>
            <div className="weekday">{weekdays[props.idag.getDay()]}</div>
            <div className="date">{props.idag.getUTCDate()}</div>
            <div className="month">{months[props.idag.getMonth()]}</div>
            <div className="names">{props.names}</div>
            <div className="additional">{props.children}</div>
        </section>
    );
};

export default App;
