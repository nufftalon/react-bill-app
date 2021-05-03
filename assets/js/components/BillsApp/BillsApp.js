import React, { Component } from 'react';
import Header from './Header';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id="BillsApp">
				<Header />
			</div>
		);
	}
}
