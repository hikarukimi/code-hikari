import React, {useState} from "react";
import { Button, Card, Form, Input, message } from "antd";
import { useUserStore } from "../../../zustand/userStore";
import { getUserById, updateUserInfo } from "../../../dataSource/user"; // 假设有更新用户信息的API

export const PersonInfo = () => {
    const userId = useUserStore((user) => user.userId);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const user = getUserById(userId as number);

    const onFinish =(values: {
        username: string;
        email: string;
        oldPassword?: string;
        newPassword?: string;
        confirmPassword?: string;
    }) => {
        // 如果有密码修改，验证密码
        if (values.newPassword) {
            if (values.newPassword !== values.confirmPassword) {
                message.error("两次输入的新密码不一致");
                return;
            }
            if (!values.oldPassword) {
                message.error("请输入旧密码");
                return;
            }
        }

        try {
            setLoading(true);
            // 准备要更新的数据
            const updateData = {
                username: values.username,
                email: values.email,
                oldPassword: values.oldPassword as string,
                newPassword: values.newPassword as string
            };

            // 调用API更新用户信息
            const success = updateUserInfo(userId as number, updateData);

            if (success) {
                message.success("信息更新成功");
                // 如果有密码修改，清空密码字段
                if (values.newPassword) {
                    form.resetFields(["oldPassword", "newPassword", "confirmPassword"]);
                }
            } else {
                message.error(values.newPassword ? "密码修改失败" : "信息更新失败");
            }
        } catch (error) {
            message.error("更新失败");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center">
                <h1 className="mr-20 text-3xl font-bold mb-4 text-gray-300">个人详情</h1>
            </div>
            <Card title="基本信息">
                <Form
                    form={form}
                    className="max-w-96"
                    initialValues={{
                        username: user?.username,
                        email: user?.email,
                        score: user?.score
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[
                            { required: true, message: "请输入用户名" },
                            { min: 3, message: "用户名至少3个字符" }
                        ]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            { required: true, message: "请输入邮箱" },
                            { type: 'email', message: '请输入有效的邮箱地址' }
                        ]}
                    >
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>

                    <Form.Item name="score" label="积分">
                        <Input readOnly />
                    </Form.Item>

                    <Form.Item
                        name="oldPassword"
                        label="旧密码"
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (getFieldValue("newPassword") && !value) {
                                        return Promise.reject(new Error("修改密码需要输入旧密码"));
                                    }
                                    return Promise.resolve();
                                }
                            })
                        ]}
                    >
                        <Input.Password placeholder="修改密码时请输入当前密码" />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        label="新密码"
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value && value.length < 6) {
                                        return Promise.reject(new Error("密码长度不能少于6位"));
                                    }
                                    if (value && value === getFieldValue("oldPassword")) {
                                        return Promise.reject(new Error("新密码不能与旧密码相同"));
                                    }
                                    return Promise.resolve();
                                }
                            })
                        ]}
                    >
                        <Input.Password placeholder="如需修改密码请输入新密码" />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label="确认密码"
                        dependencies={["newPassword"]}
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (getFieldValue("newPassword") && !value) {
                                        return Promise.reject(new Error("请确认新密码"));
                                    }
                                    if (value && getFieldValue("newPassword") !== value) {
                                        return Promise.reject(new Error("两次输入的密码不一致"));
                                    }
                                    return Promise.resolve();
                                }
                            })
                        ]}
                    >
                        <Input.Password placeholder="请再次输入新密码" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            保存修改
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};