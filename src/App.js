import React from 'react';
import './App.css';
import { Search, Header } from './components';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Search />
			</div>
		);
	}
}

export default App;
