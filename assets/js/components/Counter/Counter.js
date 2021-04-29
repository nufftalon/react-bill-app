import React, { Component } from 'react';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <div id="counter-comp">This is a counter</div>;
	}
}
