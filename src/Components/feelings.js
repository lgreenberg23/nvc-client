import React from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'

const AFRAID = ['apprehensive', 'dread', 'foreboding', 'frightened', 'panicked', 
	'petrified', 'scared', 'suspicious', 'terrified', 'wary', 'worried', 
	'anxious', 'tense']
const ANGRY = ['enraged', 'furious', 'incensed', 'indignant', 'irate', 'livid', 
	'outraged', 'resentful']
const DISQUIET = ['agitated', 'alarmed', 'discombobulated', 'disconcerted', 
	'disturbed', 'distressed', 'perturbed', 'rattled', 'edgy', 'restless', 'shocked', 
	'startled', 'surprised', 'troubled', 'uncomfortable', 'uneasy', 'unsettled', 
	'upset']
const CONFUSED = ['ambivalent', 'baffled', 'bewildered', 'dazed', 'hesitant', 
	'lost', 'mystified', 'perplexed', 'puzzled', 'torn']
const EMBARRASSED = ['ashamed', 'chagrined', 'flustered', 'mortified', 
	'self-conscious']
const YEARNING = ['envious', 'jealous', 'longing', 'nostalgic', 'pining', 'wistful'] 
const FATIGUE = ['beat', 'burnt out', 'depleted', 'exhausted', 'lethargic', 
	'listless', 'sleepy', 'tired', 'weary', 'worn out'] 
const AVERSION = ['animosity', 'appalled', 'contempt', 'disgusted', 'dislike', 
	'hatred', 'horrified', 'hostile', 'repulsed']
const ANNOYED = ['aggravated', 'dismayed', 'disgruntled', 'displeased', 
	'exasperated', 'frustrated', 'impatient', 'irritated', 'cranky']


class FeelingsForm extends React.Component {
  state = {
  	// fearFeelings: [], 
  	// angerFeelings: [],
  	// disquietFeelings: [],
  	// confusedFeelings: [],
  	// embarrassedFeelings: [],
  	// yearingFeelings: [],
  	// fatigueFeelings: [],
  	// aversionFeelings: [],
  	// annoyedFeelings: [],
  	feelings: []
  }

  
  //this works but is ASYNC - it is one feeling behind
  feelingsChanged = (feelings) => {
    this.setState({
      feelings: feelings
    });
    console.log("feelings: ", this.state.feelings)
  }

  render() {
    return (
    	<div>
    		<h3>Fear</h3>
    		<CheckboxGroup
        name="afraid"
        value={this.state.feelings}
        onChange={this.feelingsChanged}>
 				
 				{AFRAID.map(feeling =>
 					<div>
		        <label><Checkbox value={feeling}/> {feeling}</label>
 					<br></br>
 				</div>
      )}
      </CheckboxGroup>
      </div>
    );
  }
}

export default FeelingsForm

