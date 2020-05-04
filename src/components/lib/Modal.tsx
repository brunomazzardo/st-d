import React, {Component} from 'react';
import {Modal as AntModal} from "antd"
import {ModalProps} from "antd/lib/modal"

class Modal extends Component<ModalProps> {
    render() {
        return (
            <AntModal {...this.props}>
                {this.props.children}
            </AntModal>
        );
    }
}

export default Modal;