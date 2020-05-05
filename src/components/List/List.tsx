import React from 'react';
import {Table} from "antd";
import {ColumnProps} from "antd/lib/table"
import {Dragon} from "../interfaces";
import {useFetchWithLoading} from "../lib/hooks/useWithLoading";
import {DragonAPI} from "../../lib/API";


const fields : ColumnProps<Dragon>[] = [{key: "name", title: "Nome", dataIndex: "name"}, {key:"type", title: "Tipo", dataIndex: "type"}]

const DragonList = () => {

    const fetchDragons = async () => {
        const {data} = await DragonAPI.get("/")
        return data
    }

    const [dragons, loading] = useFetchWithLoading<Dragon[]>(fetchDragons, [])

    return (
        <div>
            <Table columns = {fields} dataSource={dragons} loading = {loading} rowKey = {(dragon) => dragon.id}/>
        </div>
    );
};

export default DragonList;