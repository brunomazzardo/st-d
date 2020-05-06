import React from 'react';
import {Table, Popconfirm} from "antd";
import {ColumnProps} from "antd/lib/table"
import {Dragon} from "../interfaces";
import {useFetchWithLoading} from "../lib/hooks/useWithLoading";
import {DragonAPI} from "../../lib/API";
import DragonUpsert from "./UpsertModal";
import {DeleteOutlined} from "@ant-design/icons"
import IconButton from "../lib/ButtonIcon";
import {EditOutlined} from "@ant-design/icons/lib";


const DragonList = () => {

    const [dragon, setDragon] = React.useState<Dragon>()
    const [open, setOpen] = React.useState(false);

    const editDragon = (dragon: Dragon) => {
        setDragon(dragon)
        setOpen(true)
    }

    const fields: ColumnProps<Dragon>[] = [{key: "name", title: "Nome", dataIndex: "name"}, {
        key: "type",
        title: "Tipo",
        dataIndex: "type"
    },
        {
            key: "action",
            title: "Ações",
            render: (text, dragon) => <span><Popconfirm onConfirm={() => DragonAPI.delete(`/${dragon.id}`)}
                                                        title={`Deletar ${dragon.name} ?`}><DeleteOutlined/></Popconfirm>
            <IconButton icon={<EditOutlined/>} onClick={() => editDragon(dragon)}/></span>
        }]

    const fetchDragons = async () => {
        const {data} = await DragonAPI.get("/")
        return data
    }

    const [dragons, loading] = useFetchWithLoading<Dragon[]>(fetchDragons, [])

    return (
        <div>
            <Table columns={fields} dataSource={dragons} loading={loading} rowKey={(dragon) => dragon.id}/>
            <DragonUpsert visible={open} onClose={() => setOpen(false)} saveDragon={(dragon) => console.log(dragon)}
                          data={dragon}/>
        </div>
    );
};

export default DragonList;