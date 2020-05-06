import React from 'react';
import {Form, Input, List} from "antd";
import Modal from "../lib/Modal";
import {Dragon} from "../interfaces";
import {DragonAPI} from "../../lib/API";
import IconButton from "../lib/ButtonIcon";
import {PlusOutlined, DeleteOutlined} from "@ant-design/icons"

type Props = {
    data?: Dragon
    visible: boolean;
    onClose: () => void;
    saveDragon: (data: any) => void;
};

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 18}
};

const DragonUpsert = (props: Props) => {

    const [form] = Form.useForm();
    const [saveLoading, setSaveLoading] = React.useState<boolean>(false);
    const [histories, setHistories] = React.useState<String[]>([]);
    const [history, setHistory] = React.useState<String>("");


    const handleFormFinish = async () => {
        setSaveLoading(true);
        try {
            const values = await form.validateFields();
            await props.saveDragon({...values, histories});
        } catch (e) {
            console.log(e)
        } finally {
            setSaveLoading(false)
        }
    };

    const fetchDetailedDragon = async (oldDragon: Dragon) => {
        const {data} = await DragonAPI.get(`/${oldDragon.id}`)
        setHistories(data.histories)
        form.setFieldsValue(data)
    }


    React.useEffect(() => {
        if (props.data)
            fetchDetailedDragon(props.data)
        else {
            form.resetFields()
            setHistories([])
        }
    }, [props.data]);

    const addHistory = () => {
        if(history)
            setHistories(h => {
                h.push(history)
                return h
            })
        setHistory("")
    }

    const deleteHistory = (history: String) => {

    }

    return (
        <Modal
            okButtonProps={{loading: saveLoading}}
            onOk={handleFormFinish}
            okText={"Salvar"}
            destroyOnClose={true}
            cancelText={"Cancelar"}
            onCancel={props.onClose}
            visible={props.visible}
            title={`Dragão`}
        >
            <Form form={form} layout="horizontal">
                <Form.Item rules={[{required: true, message: "Insira o nome do dragão"}]} label="Nome"
                           name="name" {...formItemLayout}>
                    <Input placeholder="Nome do dragão"/>
                </Form.Item>
                <Form.Item rules={[{required: true, message: "Insira o tipo do dragão"}]}
                           label="Tipo" {...formItemLayout} name="type">
                    <Input placeholder="Tipo do dragão"/>
                </Form.Item>
            </Form>
            <List
                size="small"
                footer={<Input onChange={(event) => setHistory(event.target.value)} placeholder="Nova história" suffix={<IconButton onClick={addHistory} icon={<PlusOutlined/>}/>}/>}
                bordered
                dataSource={histories}
                renderItem={(item: String) => <List.Item className="flex space-between">{item}<IconButton onClick={addHistory} icon={<DeleteOutlined/>}/> </List.Item>}
            />
        </Modal>
    );
};

export default DragonUpsert;