import React, { Component } from 'react';

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		const bills = [
			1,
			2,
			3,
			4,
			435,
			4454,
			43434,
			54545,
			23232,
			23343,
			332,
			3434,
			2335,
			12211,
			8897,
			76,
			78,
			54,
			32,
			38,
			500,
			501,
			502
		];
		return bills.map(bill => {
			return (
				<li className="bill" key={bill}>
					<div className="company">
						<div className="logo">
							<img src="/img/billsapp/nintendo.jpg" />
						</div>
						<div className="title">nintendo</div>
					</div>
					<div className="price">-$19.99</div>
				</li>
			);
		});
	};

	render() {
		return (
			<section id="AllBills">
				<div className="container">
					<div className="total-bills">
						<div className="text">Total Amount:</div>
						<div className="number">$874</div>
					</div>
					<ul className="bills-list">{this.showAllBills()}</ul>
				</div>
			</section>
		);
	}
}
