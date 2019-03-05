import * as React from 'react'
import BreedMode from './BreedMode'
import { connect } from 'react-redux'

class BreedModeContainer extends React.Component {
    
    render () {
        return <BreedMode breeds={ this.breeds }/>
    }
}

export default (BreedModeContainer)