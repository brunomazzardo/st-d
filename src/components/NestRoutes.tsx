import React from 'react';
import { Route as DomRoute } from 'react-router-dom';

type Props = {
    path: string,
    children: any
}

const NestRoutes = ({children, path}: Props) => {
    return (
        <DomRoute path = {path} render = {() => children }/>
    );
};

export default NestRoutes;