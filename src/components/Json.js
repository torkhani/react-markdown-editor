import React from 'react';
import JSONPretty from 'react-json-pretty';


class Json extends React.Component {

	state = {
		json: 'test'
	}

	editJson = (event) => {
		const json = event.target.value;
		this.setState({json});
	}

	render() {
		return(

				<div className="container">
					<h1 className="text-center">Json Formatter</h1>
					<hr />
					<div className="row">
						<div className="col-md-6">
							<textarea 
							className="form-control" 
							rows="50" 
							value={this.state.json}
							onChange={(e) => this.editJson(e)}></textarea>
						</div>
						<div className="col-md-6">
							<JSONPretty id="json-pretty" json={this.state.json}></JSONPretty>
						</div>
					</div>
			</div>
		)
	}
}

export default Json;