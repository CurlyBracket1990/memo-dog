import * as React from 'react'
import {Link} from "react-router-dom"

export default class Landing extends React.Component {
    render() {
        return (
            <div className='rules'>
                <h2>Rules:</h2>
                <ul>
                    <li>1. Look at the random dog picture</li>
                    <li>2. Try to guess which breed is presented</li>
                    <li>3. Enjoy the process :))</li>
                </ul>
                <Link to={'/game'}><button>Start the game now!</button></Link>
            </div>
        )
    }

}