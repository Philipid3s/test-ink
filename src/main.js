import React, {Component} from 'react';
import {render, Box, Color} from 'ink';

class Counter extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return (
			<Box borderStyle="round" borderColor="green" float="center" padding={1}>
				<ul>
					<li><Color green>{this.state.i} tests passed</Color></li>
					<li><Color red>{this.state.i} tests failed</Color></li>
				</ul>
			</Box>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

render(<Counter/>);