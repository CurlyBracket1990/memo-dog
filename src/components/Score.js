import * as React from 'react'

export default class Score extends React.Component {    

    render() {
        const {correctAnswers, totalQuestions, streakCounter, totalScore} = this.props.score
        return (
            <div className='ScroreBox'>
                <p>Your score:</p>
                {totalScore}%
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