import {useUserStore} from "../zustand/userStore";
import {Avatar, Button, Popover} from "antd";
import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {LoginForm} from "./LoginForm";
import {useNavigate} from "react-router-dom";

export const LoginAvatar = () => {

    const [modalVisible,setModalVisible]=React.useState(false)
    const user=useUserStore()
    const navigator=useNavigate()
    let logout=()=>{
        user.setLogin(false)
        user.setUserId(undefined)
    }

    let popOverContent=(
        <>
            <div className={"flex flex-col gap-4"}>
                <Button size={"large"} onClick={()=>{navigator("/personInfo")}} >个人中心</Button>
                <Button size={"large"} onClick={logout}  >退出登录</Button>
            </div>
        </>
    )

    let notLoginContent=(
        <>
            <Button size={"large"} className={"bg-blue-500 text-white"}
                    onClick={()=>{setModalVisible(!modalVisible)}}>
                注册/登录
            </Button>
            <LoginForm modalVisible={modalVisible} setModalVisible={setModalVisible}></LoginForm>
        </>
    )

    let loginContent=(
        <>
            <Popover content={popOverContent}>
                <Avatar size={"large"} icon={<UserOutlined />}/>
            </Popover>
        </>
    )

    return (
        <article>
            {user.isLogin?loginContent:notLoginContent}
        </article>
    );
};