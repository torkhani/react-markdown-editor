import React from 'react';
import ReactMarkdown from 'react-markdown';

import Navbar from './Navbar.js';
import Markdown from './Markdown';
import Json from './Json';

import {example} from '../example.js';

class App extends React.Component {

	state = {
		text: example,
	}

	componentWillMount() {
		const localStorageMarkdown = localStorage.getItem('markdownText');
		if (localStorageMarkdown) {
			this.setState({text: localStorageMarkdown})
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('markdownText', nextState.text)
	}

	editText = (event) => {
		const text = event.target.value;
		this.setState({text});
	}

	render() {
		return(
			<div>
				<Navbar />
				<Markdown />
				<Json />
			</div>
		)
	}
}

export default App;