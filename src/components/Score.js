import * as React from 'react'
import {setScore} from '../actions/ScoreAction'
import store from '../store';

export default class Score extends React.Component {    

    calculatePercentage = () => {
        const {correctAnswers, totalQuestions} = this.props.props
        if(totalQuestions > 0){
        return (correctAnswers / totalQuestions) * 100
        }
        return 0
    }

    componentDidMount = () => {
        store.dispatch(setScore(this.calculatePercentage()))
    }

    render() {
        const {correctAnswers, totalQuestions, streakCounter} = this.props.props
        return (
            <div className='ScroreBox'>
                <p>Your score:</p>
                {this.calculatePercentage()}%
                <p>Questions:</p>
                {totalQuestions}
                <p>Correct answers:</p>
                {correctAnswers}
                <p>Streak counter:</p>
                {streakCounter}
            </div>
        )
    }

}