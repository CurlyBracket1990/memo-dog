import * as React from 'react'
import GameDataRender from './GameDataRender';
import ScoreContainer from './ScoreContainer';
import { connect } from 'react-redux'
import { gameData } from '../actions/gameData'
import store from '../store'

class GameContainer extends React.Component {

    componentDidMount() {
        store.dispatch(gameData(3))
    }

    render() {
        return (
            <div>Guess the breed
                <GameDataRender breeds={this.props.breeds} />
                <ScoreContainer />
            </div>

        )
    }
}

//here comes score state stuff
// Amount of questions
// Amount of correct answers
// Streak score
// Array with correct answer of seen questions 

// State

const mapStateToProps = (state) => {
    return {
        breeds: state.gameData
    }
}


export default connect(mapStateToProps)(GameContainer)

