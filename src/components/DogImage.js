import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { dogBreeds } from '../actions/dogBreeds'

class DogImage extends Component{
    state = { dogImage: null}

    componentDidMount() {
        this.props.dogBreeds()
    }

    render() {
        return(
            <div className="dog-image">
                <h1>Guess the breed</h1>
            
                {this.state.dogImage === null && 'Loading...'}
            </div>

        )
    }
}

const mapStateToProps = (state) =>  {
    return {
        breeds: state.dogBreeds
    }
    

}

export default connect(mapStateToProps, {dogBreeds})(DogImage)