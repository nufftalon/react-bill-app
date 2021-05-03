import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import Counter from './components/Counter/Counter.js';
// import Immutable from './components/Immutable/Immutable.js';
import BillsApp from './components/BillsApp/BillsApp.js';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<BillsApp />
				{/* {<Counter status="manual" />} */}
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'));
