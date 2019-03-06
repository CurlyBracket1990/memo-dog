import * as React from 'react'
import GameDataRender from './GameDataRender';
import ScoreContainer from './ScoreContainer';
import { gameData } from '../actions/gameData'
import store from '../store'
import { resetStreak } from '../actions/ScoreAction';
// import { levelUp } from '../actions/ScoreAction';

export default class GameContainer extends React.Component {

    componentDidMount() {
        console.log("did mount")
        store.dispatch(gameData(3))
    }

    levelUp = () => {
        // store.dispach(levelUp())
        store.dispatch(resetStreak())
        store.dispatch(gameData(3))
    }

    render() {
        console.log("gamecontainer got rendered")
        return (
            <div>Guess the breed
                <GameDataRender breeds={this.props.breeds} />
                <ScoreContainer levelUp={this.levelUp} props={this.props}/>
            </div>
        )
    }
}

