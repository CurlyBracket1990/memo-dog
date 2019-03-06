import * as React from 'react'
import Score from './Score'

export default class ScoreContainer extends React.Component {

    render() {
        return(
            <div>
                <Score levelUp={this.props.levelUp} props={this.props.props}/>
            </div>
        )
    }

}