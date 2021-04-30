import React, { Component } from 'react';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			user: {
				name: 'Gary',
				age: 23,
				location: 'NYC',
				grades: {
					math: 'A',
					english: 'B+',
					science: 'C-',
					gym: 'F'
				}
			}
		};
	}
	clickedBtn = () => {
		console.log(this.state);
		const newGrade = Object.assign({}, this.state.user.grades, {
			math: 'A+'
		});
		const newUser = Object.assign({}, this.state.user, {
			name: 'Mark',
			grades: newGrade
		});
		this.setState(
			{
				background: 'green',
				user: newUser
			},
			() => {
				console.log(this.state);
			}
		);
		console.log('Clicked BTN');
	};
	changeToActive = () => {
		if (this.state.user.grades.math == 'A+') {
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
