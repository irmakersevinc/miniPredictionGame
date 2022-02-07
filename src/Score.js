import React, {Component} from 'react';

//Stateless Functional Component
const Score = props => {
	return(
    	<p className="text">
      		Your Score: {props.numCorrect}/{props.numQuestion}
      	</p>
    )
}

export default Score;