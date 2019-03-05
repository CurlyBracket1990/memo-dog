import * as React from 'react'

const data = {
    totalQuestions: 8,
    correctAnswers: 2
}

export default class Score extends React.Component {

    calculatePercentage = (data) => {
        return (data.correctAnswers / data.totalQuestions) * 100
    }

    render() {
        return (
            <div className='ScroreBox'>
                <p>Your score:</p>
                {this.calculatePercentage(data)}
                <p>Questions:</p>
                {data.totalQuestions}
                <p>Correct answers:</p>
                {data.correctAnswers}
            </div>
        )
    }

}