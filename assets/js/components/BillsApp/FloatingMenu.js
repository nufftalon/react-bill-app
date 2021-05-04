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
						<i className="far fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fas fa-piggy-bank"></i>
					</div>
					<div className="text">save</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fas fa-exchange-alt"></i>
					</div>
					<div className="text">transfer</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fas fa-cogs"></i>
					</div>
					<div className="text">settings</div>
				</div>
				<div className="link">
					<div className="add-button">
						<div className="icon">
							<i className="fas fa-plus"></i>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
