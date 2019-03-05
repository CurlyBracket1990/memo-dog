import * as React from 'react'
import { connect } from 'react-redux'
import {setScore} from '../actions/ScoreAction'

const data = {
    totalQuestions: 8,
    correctAnswers: 2
}

class Score extends React.Component {

    calculatePercentage = (data) => {
        return (data.correctAnswers / data.totalQuestions) * 100
    }

    componentDidMount = () => {
        this.props.setScore(this.calculatePercentage(data))
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

const mapStateToProps = (state) =>  {
    return {
        score: state.score
    }
    

}

export default connect(mapStateToProps, {setScore})(Score)