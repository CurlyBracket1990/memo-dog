import * as React from 'react'
import ModeContainer from './ModeContainer';
import ScoreContainer from './ScoreContainer';
import { Prompt } from 'react-router'
import { Link } from "react-router-dom"


export default class GameContainer extends React.Component {

    render() {
        return (
            <div className='gameContainer'>Guess the breed
                <ModeContainer />
                <ScoreContainer />
                <Link to={'/end'}><button className='endBtn'>End the game</button></Link>
                <Prompt message="Are you sure you want to end the game?" />
            </div>
            
        )
    }
}
