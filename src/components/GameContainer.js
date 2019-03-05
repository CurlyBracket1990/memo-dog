import * as React from 'react'
import GameDataRender from './GameDataRender';
import ScoreContainer from './ScoreContainer';

export default class GameContainer extends React.Component {
    render () {
        return (
            <div >Lets the fun begin

                <GameDataRender />
                <ScoreContainer />
            </div>

        )
        
    }
}

