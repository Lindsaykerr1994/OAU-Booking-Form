import React, { Component } from 'react';

class LocationInput extends Component {
    render(){
        return(
            <div
                id="location-input-container" 
                className="form-input text-input">
                    <input type="text"
                        name="location-input"
                        id="location-input"
                        placeholder="Location">
                    </input>
            </div>
        )
    }
}

export default LocationInput; 