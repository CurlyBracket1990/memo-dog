import * as React from 'react'
import Score from './Score'

export default class ScoreContainer extends React.Component {

    render() {
        return(
            <div>
                <Score totalScore={this.props.totalScore} correctAnswers={this.props.correctAnswers}/>
            </div>
        )
    }

}