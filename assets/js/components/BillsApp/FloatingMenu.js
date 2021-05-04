import React, { Component } from 'react';

export default class FloatingMenu extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<nav id="FloatingMenu">
				<div className="link">
					<div className="icon">
						<i class="far fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>

				<div className="link">
					<div className="icon">
						<i class="far fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>

				<div className="link">
					<div className="icon">
						<i class="far fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>

				<div className="link">
					<div className="icon">
						<i class="far fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>
			</nav>
		);
	}
}
