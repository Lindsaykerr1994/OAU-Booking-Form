import React, { Component } from 'react';

import '../css/forminputs.css';

class AdditionalComments extends Component {
    render() {
        return (
            <div className="comments-form form-input text-input">
                <input type="text" placeholder="Additional Comments"></input>
            </div>
        )
    }
}

export default AdditionalComments;