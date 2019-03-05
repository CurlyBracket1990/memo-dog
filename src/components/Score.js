import * as React from 'react'
import {setScore} from '../actions/ScoreAction'
import store from '../store';

export default class Score extends React.Component {

    calculatePercentage = () => {
        return (this.props.correctAnswers / this.props.totalQuestions) * 100
    }

    componentDidMount = () => {
        store.dispatch(setScore(this.calculatePercentage()))
    }

    render() {
        console.log(this.props)
        return (
            <div className='ScroreBox'>
                <p>Your score:</p>
                {this.calculatePercentage()}%
                <p>Questions:</p>
                {this.props.totalQuestions}
                <p>Correct answers:</p>
                {this.props.correctAnswers}
            </div>
        )
    }

}