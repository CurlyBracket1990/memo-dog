import * as React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { cleanStats } from '../actions/ScoreAction'
import { cleanData } from '../actions/gameData'
import store from '../store'

class EndGame extends React.Component {

    cleanStats() {
        store.dispatch(cleanStats())
        store.dispatch(cleanData())
    }

    render() {
        return (
            <div className='endgame'>
                <p>Thanks for the game!</p>
                <p>Your score is: {Math.round(this.props.totalScore)}%</p>
                <p>You've answered {this.props.totalQuestions} questions</p>
                <p>{this.props.correctAnswers} of them were correct</p>
                <Link to={'/game'}><button onClick={this.cleanStats}>Start a new game</button></Link>
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