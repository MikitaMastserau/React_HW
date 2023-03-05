import { Component } from "react";

import { CondRenderLayout } from "../components/CondRenderLayout";

export class CondRenderContainer extends Component {
	state = {
		isActive: false,
	};

	handleActiveToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		console.log(this.state.isActive);
		return (
			<CondRenderLayout handleClick={this.handleActiveToggle} isActive={this.state.isActive} />
		);
	};
};