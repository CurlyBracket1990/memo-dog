import * as React from 'react'

export default class Score extends React.Component {    

    render() {
        const {correctAnswers, totalQuestions, streakCounter, totalScore, level} = this.props.score
        return (
            <div className='ScoreBox'>
                <p>Your score: {Math.round(totalScore)}%</p>
                <p>Total questions: {totalQuestions}</p>
                <p>Total correct answers: {correctAnswers}</p>
                <p>Current level: {level}</p>
                <p>Level up in: {streakCounter}</p>
            </div>
        )
    }
}