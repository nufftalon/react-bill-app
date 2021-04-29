import React, { Component } from 'react';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			currentNumber: 0
		};
	}
	clickedBtn = () => {
		console.log('Clicked BTN');
	};
	render() {
		return (
			<div id="Immutable-comp">
				<div className="box"></div>
				<div className="button" onClick={this.clickedBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
