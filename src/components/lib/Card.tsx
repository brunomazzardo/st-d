import React, {Component} from 'react';
import {Card as AntCard} from "antd"
import {CardProps as AntCardProps} from "antd/lib/card"
import {Action, CardProps} from "./interfaces";


type Props<T> = Omit<AntCardProps, 'actions'> & CardProps<T>;

class Card<T> extends Component<Props<T>> {

    resolveAction = (action: Action<T>, data: T) => {
        if ("render" in action) return action.render(data);

        else if ("function" in action) {
            const Icon = action.icon
            return <Icon onClick={(e:any) => action.function(data, e)}/>
        }
    };

    render() {

        const {data} = this.props;
        const actions = this.props.actions?.map(action => this.resolveAction(action, data));

        return (
          <AntCard style={{minWidth: 200, marginTop: 16}} {...this.props} actions = {actions}/>
        );
    }
}

export default Card;
