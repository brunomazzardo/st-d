import React from 'react';
import {Table, Popconfirm} from "antd";
import {ColumnProps} from "antd/lib/table"
import {Dragon} from "../interfaces";
import {useFetchWithLoading} from "../lib/hooks/useWithLoading";
import {DragonAPI} from "../../lib/API";
import {DeleteOutlined} from "@ant-design/icons"
import IconButton from "../lib/ButtonIcon";
import {EditOutlined, PlusOutlined} from "@ant-design/icons/lib";
import DragonUpsert from "./UpsertModal";


const DragonList = () => {

    const [dragon, setDragon] = React.useState<Dragon>()
    const [open, setOpen] = React.useState(false);

    const close = () => {
        setDragon(undefined)
        setOpen(false)
    }

    const editDragon = (dragon?: Dragon) => {
        setDragon(dragon)
        setOpen(true)
    }
    const deleteDragon = async (dragon: Dragon) => {
        await DragonAPI.delete(`/${dragon.id}`)
        fetch()
    }
    const fetchDragons = async () => {
        const {data} = await DragonAPI.get("/")
        return data
    }
    const upsertDragon = async (d: Dragon) => {
        if (dragon)
            await DragonAPI.put(`/${dragon.id}`, d)
        else
            await DragonAPI.post("/", d)
        close()
        fetch()
    }

    const tableActions = (text: string, dragon: Dragon) => {
        return <>
            <Popconfirm onConfirm={() => deleteDragon(dragon)}
                        title={`Deletar ${dragon.name} ?`}><DeleteOutlined/></Popconfirm>
            <IconButton icon={<EditOutlined/>} onClick={() => editDragon(dragon)}/>
        </>
    }
    const fields: ColumnProps<Dragon>[] = [
        {
            key: "name",
            title: "Nome",
            dataIndex: "name"
        },
        {
            key: "type",
            title: "Tipo",
            dataIndex: "type"
        },
        {
            key: "action",
            title: "Ações",
            render: tableActions
        }]


    const [dragons, loading, fetch] = useFetchWithLoading<Dragon[]>(fetchDragons, [])


    return (
        <div>
            <Table footer={() => <IconButton onClick={() => editDragon()} icon={<PlusOutlined/>}/>} columns={fields}
                   dataSource={dragons} loading={loading} rowKey={(dragon) => dragon.id}/>
            <DragonUpsert visible={open} onClose={close} saveDragon={upsertDragon} data={dragon}/>
        </div>
    );
};

export default DragonList;