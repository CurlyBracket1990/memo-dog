import * as React from 'react'
import Score from './Score'
import { connect } from 'react-redux'

class ScoreContainer extends React.Component {

    render() {
        return(
            <div>
                <Score levelUp={this.props.levelUp} props={this.props}/>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        totalScore: state.score.totalScore,
        streakCounter: state.score.streakCounter,
        totalQuestions: state.score.totalQuestions,
        thingy: state.score.thingy,
        correctAnswers: state.score.correctAnswers
    }
}


export default connect(mapStateToProps)(ScoreContainer)