import * as React from 'react'
import GameDataRender from './GameDataRender';
import ScoreContainer from './ScoreContainer';
import {Link} from "react-router-dom"

export default class GameContainer extends React.Component {

    render() {
        return (
            <div className='gameContainer'>Guess the breed
                <GameDataRender />
                <ScoreContainer />
                <Link to={'/end'}><button className='endBtn'>End the game</button></Link>
            </div>
        )
    }
}


