import React, { Component } from 'react';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Cindy', 'Billy', 'Lisa', 'John'],
			both: [],
			teachers: ['Cam', 'Brad', 'Jennifer'],
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
		// Add name
		// const newState = {
		// 	names: [...this.state.names, 'Ramsey']
		// };

		//Remove
		// const newState = {
		// 	names: this.state.names.filter(name => name !== 'Billy')
		// };

		//Merge two arrays
		// const newState = {
		// 	both: [...this.state.names, ...this.state.teachers]
		// };

		//sort array
		const newState = {
			names: this.state.names.slice().sort()
		};

		this.setState(newState, () => {
			console.log(this.state);
		});
		console.log('Clicked BTN');
	};
	changeToActive = () => {
		if (this.state.names[0] == 'Billy') {
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
