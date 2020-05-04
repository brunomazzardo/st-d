import React, {Component} from "react";
import {Col, Row, Spin} from "antd";
import {Action, CardProps} from "./interfaces";

type Props<T> = {
    Card: React.FC<CardProps<T>> | React.ComponentClass<CardProps<T>>
    dataSource: T[]
    loading: boolean
    emptyMessage: string
    actions?: Action<T>[]
    onClick?: (data: T) => void
};

class CardGrid<T> extends Component<Props<T>> {
    render() {
        const {Card, loading, dataSource, emptyMessage} = this.props;

        if (loading)
            return (
                <div className="flex auto align-center center">
                    <Spin className="" size={"large"}/>
                </div>
            );

        if(dataSource.length === 0)
            return <span>{emptyMessage}</span>;


        return (
            <Row gutter={16}>
                {dataSource.map(data => (
                    <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={4}>
                        <Card onClick={this.props.onClick} actions={this.props.actions}  data={data}/>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default CardGrid;

