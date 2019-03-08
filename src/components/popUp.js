import * as React from 'react'

export default class PopUp extends React.Component {

    render() {
        const answer = this.props.correctAnswer
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h2>You are wrong :(</h2>
            <p>Correct answer is:</p>
            <p>{answer.name}</p>
            <img src={answer.image} alt={answer.name}></img>
          </div>
        </div>
      );
    }
  }
