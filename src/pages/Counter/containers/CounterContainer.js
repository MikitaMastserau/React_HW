import { Component } from "react";

import { CounterLayout } from "../components/CounterLayout";

export class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
          countValue: 0,
        };
    };

    handleDecrement = () => {
        if (this.state.countValue > 0) {
            this.setState({countValue: this.state.countValue - 1});
        };
    };

    handleReset = () => {
        this.setState({countValue: 0});
    };
    
    handleIncrement = () => {
        this.setState({countValue: this.state.countValue + 1});
    };

    render() {
        return (
            <CounterLayout
                counterValue={this.state.countValue}
                handleDecrement={this.handleDecrement}
                handleReset={this.handleReset}
                handleIncrement={this.handleIncrement} />
        );
    };
};