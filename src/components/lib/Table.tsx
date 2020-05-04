import React, {Component} from 'react';
import {Table as AntTable} from "antd"
import {ColumnProps as AntColumnProps,  TableProps} from "antd/lib/table"
import {TableLocale} from 'antd/lib/table/interface';

type Props = {
    locale?: TableLocale
}

const defaultLocale: TableLocale = {};

export default class Table<RecordType> extends Component<TableProps<any>> {
    render() {
        const locale = {...defaultLocale, ...this.props.locale};
        return (
            <div>
                <AntTable locale={locale} {...this.props}/>
            </div>
        );
    }
}

export type ColumnProps<T> = AntColumnProps<T>
