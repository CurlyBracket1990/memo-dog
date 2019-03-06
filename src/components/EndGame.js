import * as React from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux'

class EndGame extends React.Component {
    render() {
        return (
            <div>
                <p>Thanks for the game!</p>
                <p>Your score is: {this.props.totalScore}%</p>
                <p>You've answered {this.props.totalQuestions} questions</p>
                <p>{this.props.correctAnswers} of them were correct</p>
                <Link to={'/game'}><button>Start a new game</button></Link>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        totalScore: state.score.totalScore,
        totalQuestions: state.score.totalQuestions,
        correctAnswers: state.score.correctAnswers
    }
}

export default connect(mapStateToProps)(EndGame)