import React from 'react';
import ReactMarkdown from 'react-markdown';

import Navbar from './Navbar.js'

import {example} from '../example.js';

class Markdown extends React.Component {

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

				<div className="container">
					<h1 className="text-center">Markdown Live preview</h1>
					<hr />
					<div className="row">
						<div className="col-md-6">
							<textarea 
							className="form-control" 
							rows="50" 
							value={this.state.text}
							onChange={(e) => this.editText(e)}
							></textarea>
						</div>
						<div className="col-md-6">
							<ReactMarkdown source={this.state.text} />,
						</div>
					</div>
			</div>
		)
	}
}

export default Markdown;