import React from 'react';
import {Form, Input, List} from "antd";
import Modal from "../lib/Modal";
import {Dragon} from "../interfaces";
import {DragonAPI} from "../../lib/API";

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


    const handleFormFinish = async () => {
        setSaveLoading(true);
        try {
            const values = await form.validateFields();
            await props.saveDragon(values);
        } catch (e) {
            console.log(e)
        } finally {
            setSaveLoading(false)
        }
    };

    const fetchDetailedDragon = async (oldDragon: Dragon) => {
        const {data} = await DragonAPI.get(`/${oldDragon.id}`)
        form.setFieldsValue(data)
    }


    React.useEffect(() => {
        if (props.data)
            fetchDetailedDragon(props.data)
        else
            form.resetFields()
    }, [props.data]);

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
                <Form.Item label={"Histórias"} {...formItemLayout} name="histories">
                    <List
                        size="small"
                        footer={<Input placeholder="Nova história"
                        />}
                        bordered
                        dataSource={form.getFieldValue("histories")}
                        renderItem={(item: String) => <List.Item>{item}</List.Item>}
                    />
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default DragonUpsert;