import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import {Link} from 'react-router-dom';
// import {addFreeWrite} from '../actions/freeWrite'

class FreeWrite extends React.Component{

	state = {
		text: ""
	}

	handleSubmit = (event) => {
		event.preventDefault()
		debugger
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
	 		alert("Please write something about your experience")
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
		    What happened? Please do not feel any need to censor yourself here:
		    <input type="text" value={this.state.value} onChange={this.handleChange} />
		  </label>
		  <input type="submit" value="Submit" />
		</form>
		)
	}
}

// function mapDispatchToProps(dispatch){
//   return {
//     addPost: (textParams, history) => {
//       return dispatch(addFreeWrite(textParams, history))
//     }
//   }
// }


// function mapStateToProps(state){
// 	return {textState: state}
// }

// export default connect(mapStateToProps,mapDispatchToProps)(FreeWrite)

export default FreeWrite

