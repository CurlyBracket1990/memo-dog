import * as React from 'react'
import Score from './Score'
import { connect } from 'react-redux'
import store from '../store'
import { resetStreak, levelSelect, setScore} from '../actions/ScoreAction';

class ScoreContainer extends React.Component {

    calculatePercentage = () => {
        const {correctAnswers, totalQuestions} = this.props.score
        if(totalQuestions > 0){
        return (correctAnswers / totalQuestions) * 100
        }
        return 0
    }

    componentDidUpdate(prevProps){
        if(this.props.score.totalQuestions !== prevProps.score.totalQuestions){
            store.dispatch(setScore(this.calculatePercentage()))
        }
        if(this.props.score.streakCounter !== prevProps.score.streakCounter && this.props.score.streakCounter === 0) {
            this.levelUp(this.props.score.level+1)
        }
    }

    levelUp = (num) => {
        store.dispatch(resetStreak())
        store.dispatch(levelSelect(num))
    }

    render() {
        return(
            <div>
                <Score levelUp={this.levelUp} score={this.props.score}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        score: state.score,
    }
}


export default connect(mapStateToProps)(ScoreContainer)