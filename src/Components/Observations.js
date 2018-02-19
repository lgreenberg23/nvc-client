import React from 'react'
import { connect } from 'react-redux'

class Observations extends React.Component{
	state = {
		text: ""
	}

	handleSubmit = (event) => {
		event.preventDefault()

		if(!!this.state.text){
			console.log("text", this.state.text)
	// set up to send to the database using fetch
			// const textParams = {
			// 	text: this.state.text
			// }
			// this.props.addFreeWrite(postParams, this.props.history)

	// clear the form
		 	this.setState({
		 			text: ''
		 	})
	 	}else{
	 		alert("Please write something that happened")
	 	}
	}


	handleTextChange = (event) =>{
		this.setState({
			text: event.target.value
		})
	}

	render(){
		return (
		<form onSubmit={this.handleSubmit}>
		  <label>
		    What actions did the other person do? Objectively, what took place?
		    <input type="text" value={this.state.value} onChange={this.handleChange} />
		  </label>
		  <input type="submit" value="Submit" />
		</form>
		)
	}






}