import React from "react";
import logo from "./assets/images/logo192.png";

class Child extends React.Component {
    constructor(props) {
        super();
        this.state = {
            credits: {
                name: "Rune",
            },
        };
    }

    x = () => {
        const { credits } = this.state;
        credits.name = "Bo";
        console.log(credits);

        this.setState({
            credits: credits,
        });
    };

    componentDidMount() {
        this.x();
    }
    componentWillUnmount() {}
    componentDidUpdate() {
        console.log("Hej");
    }

    render() {
        return (
            <div>
                {this.credits}
                <img src={logo} alt={this.credits} />
            </div>
        );
    }
}

export default Child;
