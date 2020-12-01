import React, { Component } from 'react';

import DateTimeForm from './components/datetimeform.js';
import ClientDetails from './components/clientdetails.js';
import AdditionalComments from './components/additionalcomments.js';
import FormFooter from './components/formfooter.js';

import './css/App.css';
import './css/fonts.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="font-oswald text-uppercase font-25 header">
                    <p className="inline-block">Request A Course</p>
                </div>
                <DateTimeForm />
                <ClientDetails />
                <AdditionalComments />
                <FormFooter />
            </div>
        )
    }
}

export default App;
