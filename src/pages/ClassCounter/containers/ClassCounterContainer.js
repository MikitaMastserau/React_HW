import { Component } from "react";

import { ClassCounterLayout } from "../components/ClassCounterLayout";

export class ClassCounterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countValue: 0,
		};
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
		return (
			<ClassCounterLayout
				counterValue={this.state.countValue}
				handleDecrement={this.handleDecrement}
				handleReset={this.handleReset}
				handleIncrement={this.handleIncrement}
			/>
		);
	};
};