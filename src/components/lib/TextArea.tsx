import React from 'react';

import {Input as AntInput} from 'antd';
import {TextAreaProps} from "antd/lib/input"

type Props = {}

class Input extends React.Component<Props & TextAreaProps> {

    render() {
        return (
            <AntInput.TextArea {...this.props}/>
        );
    }
}

export default Input;
