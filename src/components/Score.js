import * as React from 'react'
import {setScore} from '../actions/ScoreAction'
import store from '../store';
import { gameData } from '../actions/gameData'

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

    componentDidUpdate(prevProps){
        if(this.props.props.streakCounter !== prevProps.streakCounter && this.props.props.streakCounter === 3) {
            this.props.levelUp()
        }
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