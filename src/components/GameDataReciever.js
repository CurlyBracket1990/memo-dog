import React, {Component} from 'react'
import { connect } from 'react-redux'
import { gameData } from '../actions/gameData'

class GameDataReciever extends Component {
    state = { dogImage: null}

    componentDidMount() {
        this.props.gameData(3)
    }

    // selectRandoms = (obj) => {
    //     const dogArray = Object.keys(obj)
    //     const i = this.getIndexNums(3, dogArray)
    //     const firstBreed = dogArray[i[0]]
    //     let secondBreed = dogArray[i[1]]
    //     let thirdBreed = dogArray[i[2]]
    //     console.log([firstBreed, secondBreed, thirdBreed])
    //     return [firstBreed, secondBreed, thirdBreed]
    // }

    // getIndexNums = (num, arr) => {
    //     let indexArr = []
    //     while (indexArr.length < num) {
    //         let indexNum = this.randomizer(arr)
    //         if (indexArr.indexOf(indexNum) === -1) indexArr.push(indexNum)
    //         }

    //     return indexArr
    //     }
    

    // randomizer = (arr) => {

    //     return Math.floor(Math.random() * arr.length) - 1
         
    // }

    render() {

        return(
            
            <div className="dog-image">
                <h1>Guess the breed</h1>
                
            {this.props.breeds.breeds && this.selectRandoms(this.props.breeds.breeds)}
                {this.props.breeds.breeds === null && 'Loading...'}
            </div>

        )
    }
}
const mapStateToProps = (state) =>  {
    return {
        breeds: state.gameData
    }
    

}


export default connect(mapStateToProps, {gameData})(GameDataReciever)