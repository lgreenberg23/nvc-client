import React from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'

const CONNECTION = 
	['acceptance', 'affection', 'appreciation', 'belonging','cooperation', 
	'communication', 'closeness','community', 'companionship', 'compassion', 
	'consideration','consistency', 'empathy', 'inclusion', 'intimacy','love', 
	'mutuality', 'nurturing', 'respect', 'self-respect','safety','security',
	'stability','support', 'to know and be known','to see and be seen',
	'to understand and be understood','trust','warmth']

// const PHYSICAL = ['air', 'food','movement', 'exercise', 'rest','sleep',
// 	'sexual expression', 'safety', 'shelter','touch','water']

// const HONESTY = ['authenticity','integrity','presence']

// const PLAY = ['joy', 'humor']

// const PEACE = ['beauty','communion','ease','equality','harmony','inspiration','order']

// const AUTONOMY = ['choice', 'freedom', 'independence', 'space', 'spontaneity']

// const MEANING = ['awareness', 'celebration of life', 'challenge','clarity', 
// 	'competence', 'consciousness', 'contribution','creativity', 
// 	'discovery', 'efficacy', 'effectiveness', 'growth','hope', 
// 	'learning', 'mourning', 'participation', 'purpose', 'expression', 
// 	'stimulation', 'to matter', 'understanding']


class NeedsForm extends React.Component {
  state = {
  	connectionNeeds: [],
  	physicalNeeds: [],
  	honestyNeeds: [],
  	playNeeds: [],
  	peaceNeeds: [],
  	autonomyNeeds: [],
  	meaningNeeds: [],
  }

  
  //this works but is ASYNC - it is one need behind
  connectionNeedsChanged = (needs) => {
    this.setState({
      needs: needs
    });
    console.log("needs: ", this.state.needs)
  }

  render() {
    return (
    <div>
    	<div>
    		<h3>Connection</h3>
    		<CheckboxGroup
        name="connection"
        value={this.state.connectionNeeds}
        onChange={this.connectionNeedsChanged}>
 				
 				{CONNECTION.map(need =>
 					<div>
		        <label><Checkbox value={need}/> {need}</label>
 					<br></br>
 				</div>
      )}
      </CheckboxGroup>
      </div> 	

      

     </div>
    );
  }
}

export default NeedsForm

/*
<div>
    		<h3>Physical Well-Being</h3>
    		<CheckboxGroup
        name="physical"
        value={this.state.physicalNeeds}
        onChange={this.physicalNeedsChanged}>
 				
 				{PHYSICAL.map(need =>
 					<div>
		        <label><Checkbox value={need}/> {need}</label>
 					<br></br>
 				</div>
      )}
      </CheckboxGroup>
      </div> 	

      <div>
    		<h3>Honesty</h3>
    		<CheckboxGroup
        name="honesty"
        value={this.state.honestyNeeds}
        onChange={this.honestyNeedsChanged}>
 				
 				{HONESTY.map(need =>
 					<div>
		        <label><Checkbox value={need}/> {need}</label>
 					<br></br>
 				</div>
      )}
      </CheckboxGroup>
      </div> 

      <div>
    		<h3>Play</h3>
    		<CheckboxGroup
        name="play"
        value={this.state.playNeeds}
        onChange={this.playNeedsChanged}>
 				
 				{PLAY.map(need =>
 					<div>
		        <label><Checkbox value={need}/> {need}</label>
 					<br></br>
 				</div>
      )}
      </CheckboxGroup>
      </div>

 */