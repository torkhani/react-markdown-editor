import React from 'react';
import marked from 'react-marked';

class App extends React.Component {

	state = {
		text: "test youcef",
	}

	editText = (event) => {
		const text = event.target.value;
		this.setState({text});
	}

	renderText = (text) => {
		const markedText = marked(text, {sanitize: true});
		return { __html: markedText }
	}

	render() {
		return(
			<div className="container">
				<h1>Markdown Editor</h1>
				<div className="row">
					<div className="col-md-6">
						<textarea 
						className="form-control" 
						row="20" 
						value={this.state.text}
						onChange={(e) => this.editText(e)}
						></textarea>
					</div>
					<div className="col-md-6">
						<div dangerouslySetInnerHTML={this.renderText('test')}></div>
					</div>
				</div>
			</div>

		)
	}
}

export default App;