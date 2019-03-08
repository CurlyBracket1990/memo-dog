import * as React from 'react'

export default class Score extends React.Component {    

    render() {
        const {correctAnswers, totalQuestions, streakCounter, totalScore} = this.props.score
        return (
            <div className='ScoreBox'>
                <p>Your score: {Math.round(totalScore)}%</p>
                <p>Questions: {totalQuestions}</p>
                <p>Correct answers: {correctAnswers}</p>
                <p>Streak counter: {streakCounter}</p>
            </div>
        )
    }

}