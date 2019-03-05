import * as React from 'react'
import BreedMode from './BreedMode'

class BreedModeContainer extends React.Component {

    render () {
        return <BreedMode nextQuestion={this.props.nextQuestion} breeds={ this.props.breeds }/>
    }
}

export default (BreedModeContainer)