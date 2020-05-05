import React from 'react';
import {Table} from "antd";
import {ColumnProps} from "antd/lib/table"
import {Dragon} from "../interfaces";
import {useFetchWithLoading} from "../lib/hooks/useWithLoading";
import {DragonAPI} from "../../lib/API";
import DragonUpsert from "./UpsertModal";


const DragonList = () => {

    const [dragon, setDragon] = React.useState<Dragon>()
    const [open, setOpen] = React.useState(false);

    const fields : ColumnProps<Dragon>[] = [{key: "name", title: "Nome", dataIndex: "name"}, {key:"type", title: "Tipo", dataIndex: "type"},
        {key: "action", title: "Ações", render: (text, dragon) => <span><a>Deletar</a><a onClick={() => {
            setDragon(dragon)
                setOpen(true)
            }}>Editar</a></span> }]

    const fetchDragons = async () => {
        const {data} = await DragonAPI.get("/")
        return data
    }

    const [dragons, loading] = useFetchWithLoading<Dragon[]>(fetchDragons, [])

    return (
        <div>
            <Table  columns = {fields} dataSource={dragons} loading = {loading} rowKey = {(dragon) => dragon.id} />
            <DragonUpsert visible={open} onClose={() => setOpen(false)} saveDragon={(dragon) => console.log(dragon)} data={dragon}/>
        </div>
    );
};

export default DragonList;