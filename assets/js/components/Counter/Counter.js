import React, { Component } from 'react';
import Button from './Button.js';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = { status: 'manual', currentNumber: 0 };
	}
	clickedAdd = () => {
		this.setState(
			{
				currentNumber: this.state.currentNumber + 1
			},
			() => {
				console.log(this.state);
			}
		);
	};
	componentWillUnmount() {
		console.log('component will mount stated');
	}
	componentDidMount() {
		if (this.props.status == 'manual') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterRun();
				}
			);
		}
	}
	clickedMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};
	counterRun = () => {
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};
	render() {
		const styleCounterComp = {
			width: '100%',
			maxWidth: '400px',
			margin: '0 auto'
		};

		const styleNumber = {
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center'
		};

		const styleButton = {
			width: '50%',
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center',
			cursor: 'pointer'
		};

		const styleButtons = {
			display: this.props.status == 'auto' ? 'none' : 'flex'
		};

		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="minus"
						hoverColor="red"
						fontColor="white"
						backgroundColor="black"
						trigger={this.clickedMinus}>
						-
					</Button>
					<Button
						action="plus"
						hoverColor="purple"
						fontColor="black"
						backgroundColor="white"
						trigger={this.clickedAdd}>
						+
					</Button>
				</div>
			</div>
		);
	}
}
