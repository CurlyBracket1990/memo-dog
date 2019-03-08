import * as React from 'react'
import { connect } from 'react-redux'
// import store from '../store'

class HintContainer extends React.Component {
    
    render() {
        return (
            !this.props.thingy.includes(this.props.correctAnswer.name) &&
            <div className="hint-button">
                <button type="button"
                    onClick={this.props.hintHighlight}>
                    Hint
            </button>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        thingy: state.score.thingy,
        correctAnswer: state.gameData.correctAnswer,
        breeds: state.gameData.breeds
    }
}


export default connect(mapStateToProps)(HintContainer)

