
import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux'

class Categories extends React.Component{

	state = {
		Fear: false, 
		Anger: false,
		Disquiet: false,
		Confusion: false,
		Embarrassment: false,
		Yearning: false,
		Fatigue: false,
		Aversion: false,
		Annoyance: false
	}

	//this will update state to change the categories to true from false	
	//this works BUT IT IS ASYNC
	handleClick = (event) => {
		switch(event.target.innerHTML) {
    		case 'Fear':
				this.setState({ Fear: true })
				break;		
			case 'Anger':
				this.setState({ Anger: true })
				break;
			case 'Disquiet':
				this.setState({ Disquiet: true })
				break
			case 'Confusion':
				this.setState({ Confusion: true })
				break
			case 'Embarrassment':
				this.setState({ Embarrassment: true })
				break
			case 'Yearning':		
				this.setState({ Yearning: true })
				break
			case 'Fatigue':
				this.setState({ Fatigue: true })
				break
			case 'Aversion':
				this.setState({ Aversion: true })
				break
			case 'Annoyance':
				this.setState({ Annoyance: true })
				break
			default:
				return null
		}
		console.log("state", this.state)
	}




	//on send will re-route you to the next page to choose specific 
	//feelings
	handleSubmit = (event) => {
		console.log("event", event.target.value, "state", this.state)
		return null
	}

	render(){
		return(
			<div>
				<h1>Welcome to our NVC site</h1>
				<br></br><button onClick={this.handleClick}>Fear</button>
				<br></br><button onClick={this.handleClick}>Anger</button>
				<br></br><button onClick={this.handleClick}>Disquiet</button>
				<br></br><button onClick={this.handleClick}>Confusion</button>
				<br></br><button onClick={this.handleClick}>Embarrassed</button>
				<br></br><button onClick={this.handleClick}>Yearning</button>
				<br></br><button onClick={this.handleClick}>Fatigue</button>
				<br></br><button onClick={this.handleClick}>Aversion</button>
				<br></br><button onClick={this.handleClick}>Annoyance</button>
				<br></br><button onClick={this.handleSubmit}>Submit</button>
				<br></br>
				<br></br>
			</div>
		)
	}
}

export default Categories

// function mapStateToProps(state) {
//   return {
//      posts: state.posts.list
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(PostActions, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PublicHome)

