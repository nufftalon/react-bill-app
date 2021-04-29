import React, { Component } from 'react';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black'
		};
	}
	clickedBtn = () => {
		this.setState({
			background: 'green'
		});
		console.log('Clicked BTN');
	};
	changeToActive = () => {
		if (this.state.background == 'green') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className={`box ${this.changeToActive()}`}></div>
				<div className="button" onClick={this.clickedBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
