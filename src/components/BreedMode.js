/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'

export default function BreedMode() {
    // props.breeds is a key:value pair 
    var breeds = [ { "breed1": "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg"},
                   { "breed2": "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg" },
                    {"breed3": "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg"}
    ]     

    return (

        <div className="breed-name-game"> 
        
            <img 
                src={ Object.values(breeds[0])[0] }
                alt="dog image" 
            />
            <form> 
            { breeds.map(breed => Object.keys(breed).map(name => 
                    <div className="radio"> 
                        <label key={name}>
                            <input  type="radio"
                                    name="dog-names"
                                    value={ name }    
                                    // checked = {false}
                                    // onChange={ this.handleOptionChange} 
                                    className="dog-names-input"   
                            />
                            { name }
                        </label>
                    </div>
                ))}    
                <div className="radio-submit">
                    <button className="but btn-primary" type="submit">
                        Save
                    </button>
                </div>
                
            </form>

        </div>
    )
}


