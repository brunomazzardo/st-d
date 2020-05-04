import React from "react";

type CustomAction<T> = {
    render: (data: T) => React.ReactNode
}

type IconAction<T> = {
    icon: any;
    function: (data: T, event?: any) => void;
}

export type Action<T> = IconAction<T> | CustomAction<T>

export type CardProps<T> = {
    data: T;
    actions?: Action<T>[]
    onClick?: (data: T) => void;
};
