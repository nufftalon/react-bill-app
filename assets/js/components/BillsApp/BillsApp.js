import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			allBills: []
		};
	}
	clickedAddBillBtn = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
	};

	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills />
				<AddBill addBillOpen={this.state.addBillOpen} />
				<div className="content-background"></div>
				<FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
			</div>
		);
	}
}
