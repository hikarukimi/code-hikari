import {Alert, Form, Image, Input, Modal, Radio, RadioChangeEvent} from "antd";
import React, {Fragment, JSX, useState} from "react";
import {isUsernameExist, login, register} from "../dataSource/user";
import {useForm} from "antd/es/form/Form";
import {useUserStore} from "../zustand/userStore";

export const LoginForm = (props:{
    modalVisible:boolean,
    setModalVisible:Function
}) => {


    let [action, setAction] = useState("login");

    let [formData] = useForm()

    let [alertComponent,setAlertComponent]=useState(<></>) as [JSX.Element,Function]

    let userStore=useUserStore()

    function changeAction(e: RadioChangeEvent) {
        formData.resetFields()
        setAction(e.target.value)
    }

    let onLoginOrRegister=()=> {
        if (action === "login"){
            return onLogin()
        }
        return onRegister()
    }

    let onLogin=()=>{
        const data=login(formData.getFieldsValue())
        let receiveMessage =data.message
        if (receiveMessage === "success") {
            props.setModalVisible(false)
            setAlertComponent(<Alert message={receiveMessage} type={"success"} className={"mb-4"}></Alert>)
            userStore.setLogin(true)
            userStore.setUserId(data.data.id)
        } else{

            setAlertComponent(<Alert message={receiveMessage} type={"error"} className={"mb-4"}></Alert>)
        }
    }
    let onRegister=()=>{
        let receiveMessage =register(formData.getFieldsValue()).message
        if (receiveMessage === "success") {
            onLogin()
        } else{
            setAlertComponent(<Alert message={receiveMessage} type={"error"} className={"mb-4"}></Alert>)
        }
    }

    let onCancel=()=>{
        props.setModalVisible(false)
        formData.resetFields()
        setAlertComponent(<></>)
    }

    let loginComponent = (
        <>
            <Form.Item>
                <Form.Item name={"username"} label={"用户名"} rules={[
                    {required: true, message: "请输入用户名"},
                ]}>
                    <Input placeholder="请输入用户名"></Input>
                </Form.Item>
                <Form.Item name={"password"} label={"密码"} rules={[{required: true, message: "请输入密码"}]}>
                    <Input placeholder="请输入密码"></Input>
                </Form.Item>
                <Form.Item name={"code"} label={"请输入验证码"} rules={[{required: true, message: "请输入验证码"}]}>
                    <Input placeholder="请输入验证码"></Input>
                </Form.Item>
            </Form.Item>
        </>

    )
    let registerComponent = (
        <Form.Item>
            <Form.Item name={"username"} label={"用户名"} rules={[
                {required: true, message: "请输入用户名"},
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!isUsernameExist(getFieldValue('username'))) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('用户名已存在'));
                    },
                }),
            ]}>
                <Input placeholder="请输入用户名"></Input>
            </Form.Item>
            <Form.Item name={"password"} label={"密码"} rules={[{required: true, message: "请输入密码"}]}>
                <Input placeholder="请输入密码"></Input>
            </Form.Item>
            <Form.Item name={"confirmPassword"} label={"确认密码"} rules={[{required: true, message: "请输入确认密码"},
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次密码不一致'));
                    }
                })]}>
                <Input placeholder="请输入确认密码"></Input>
            </Form.Item>
            <Form.Item name={"code"} label={"请输入验证码"} rules={[{required: true, message: "请输入验证码"}]}>
                <Input placeholder="请输入验证码"></Input>
            </Form.Item>
        </Form.Item>
    )

    return (
        <Fragment>
            <Modal open={props.modalVisible}
                   onOk={onLoginOrRegister}
                   onCancel={onCancel}
            >
                <Image src={"/codeHikariLogo.png"} preview={false}></Image>
                {alertComponent}
                <Form form={formData}>
                    <Form.Item className={"gap-4"}>
                        <Radio.Group options={["login", "register"]} defaultValue={action}
                                     optionType="button" buttonStyle="solid" block={true}
                                     onChange={changeAction}></Radio.Group>
                    </Form.Item>
                    {action === "login" ? loginComponent : registerComponent}
                </Form>
            </Modal>
        </Fragment>
    );
};