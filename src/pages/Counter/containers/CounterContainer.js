import { Component } from "react";

import { CounterLayout } from "../components/CounterLayout";

export class CounterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countValue: 0,
		};

		console.log("constructor");
	};

	componentDidMount() {
		console.log("Did Mount");
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log("Should Update, true");
		return true;
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("Did Update");
	};

	componentWillUnmount() {
		console.log("Unmounted");
	};

	handleDecrement = () => {
		if (this.state.countValue > 0) {
			this.setState({ countValue: this.state.countValue - 1 });
		};
	};

	handleReset = () => {
		this.setState({ countValue: 0 });
	};

	handleIncrement = () => {
		this.setState({ countValue: this.state.countValue + 1 });
	};

	render() {
		console.log("Render");
		return (
			<CounterLayout
				counterValue={this.state.countValue}
				handleDecrement={this.handleDecrement}
				handleReset={this.handleReset}
				handleIncrement={this.handleIncrement}
			/>
		);
	};
};