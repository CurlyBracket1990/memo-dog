import * as React from 'react'
import GameDataReciever from './GameDataReciever';
import ScoreContainer from './ScoreContainer';

export default class GameContainer extends React.Component {
    render () {
        return (
            <div >Lets the fun begin

                <GameDataReciever />
                <ScoreContainer />
            </div>

        )
        
    }
}

