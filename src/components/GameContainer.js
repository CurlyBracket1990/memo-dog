import * as React from 'react'
import GameDataReciever from './GameDataReciever';
import BreedMode from './BreedMode'

export default class GameContainer extends React.Component {
    render () {
        return (
            <div >Lets the fun begin

                <GameDataReciever />
                <BreedMode />
            </div>

        )
        
    }
}

