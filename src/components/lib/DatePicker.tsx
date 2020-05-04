import React, {Component} from 'react';
import {DatePicker as AntDatePicker} from "antd";
import {DatePickerProps} from 'antd/lib/date-picker'


class DatePicker extends Component<DatePickerProps> {
    render() {
        return (
            <AntDatePicker {...this.props}/>
        );
    }
}

export default DatePicker;