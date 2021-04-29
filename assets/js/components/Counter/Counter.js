import React, { Component } from 'react';
import Button from './Button.js';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="number" style={styleNumber}>
					0
				</div>
				<div className="buttons" style={styleButtons}>
					<Button action="minus">-</Button>
					<Button action="plus">+</Button>
				</div>
			</div>
		);
	}
}

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
	display: 'flex'
};
