import * as React from 'react'
import GameDataRender from './GameDataRender';
import ScoreContainer from './ScoreContainer';
import { connect } from 'react-redux'
import { gameData } from '../actions/gameData'
import store from '../store'
import { resetStreak } from '../actions/ScoreAction';

class GameContainer extends React.Component {

    componentDidMount() {
        store.dispatch(gameData(3))
    }

    levelUp = () => {
        store.dispatch(resetStreak())
        store.dispatch(gameData(3))
    }

    render() {
        return (
            <div>Guess the breed
                <GameDataRender breeds={this.props.breeds} />
                <ScoreContainer levelUp={this.levelUp} props={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.gameData,
        totalScore: state.score.totalScore,
        streakCounter: state.score.streakCounter,
        totalQuestions: state.score.totalQuestions,
        thingy: state.score.thingy,
        correctAnswers: state.score.correctAnswers
    }
}


export default connect(mapStateToProps)(GameContainer)

