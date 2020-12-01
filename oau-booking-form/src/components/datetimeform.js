import React, { Component } from 'react';

import ActivityInput from './additionalfeatures/activityinput.js';
import TimeInput from './additionalfeatures/timeinput.js';
import DateInput from './additionalfeatures/dateinput.js';
import LocationInput from './additionalfeatures/locationinput.js';

import '../css/forminputs.css';

class DateTimeForm extends Component {
    render() {
        return (
            <div className="date-time-form">
                <ActivityInput />
                <TimeInput />
                <DateInput />
                <LocationInput />
            </div>
        )
    }
}

export default DateTimeForm;