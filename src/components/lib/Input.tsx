import React, {Component} from 'react';
import {Input as AntInput} from 'antd';
import {InputProps} from "antd/lib/input"

type Props = {}

class Input extends Component<Props & InputProps> {

    render() {
        return (
            <AntInput {...this.props}/>
        );
    }
}

export default Input;