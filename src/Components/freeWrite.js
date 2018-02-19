import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import {Link} from 'react-router-dom';
// import {addFreeWrite} from '../actions/freeWrite'


class FreeWrite extends React.Component{

	state = {
		text: ""
	}


	handleSubmit = (event) => {
		event.preventDefault()
		// debugger
		//debugger is here b/c the value of this is undefined
		if(!!this.state.text){
			let textHere = this.state.text
			console.log("text:", textHere)
	// set up to send to the database using fetch
			// const textParams = {
			// 	text: this.state.text
			// }
			// this.props.addFreeWrite(postParams, this.props.history)

	// clear the form -- clears the form in memory but not in display. fascinating
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
		//console.log(this.state.text)
	}

	render(){
		return (
		<form onSubmit={this.handleSubmit}>
		  <label>
		    What happened? Please do not feel any need to censor yourself here:
		    <input type="text" value={this.state.value} onChange={this.handleTextChange} />
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

