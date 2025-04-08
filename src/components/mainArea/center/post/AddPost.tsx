import { Form, Input, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getTags } from "../../../../dataSource/tag";
import { newPost, Post, postListLength } from "../../../../dataSource/post";
import { useUserStore } from "../../../../zustand/userStore";
import {useForm} from "antd/es/form/Form";
import {EditorComponent} from "../../../common/Editor";

//TODO:学习这里Editor编辑器的导入
export const AddPost = () => {
    // Hooks 初始化
    const navigate = useNavigate();
    const userId = useUserStore((user) => user.userId) as number;
    const [form] = useForm();
    const tagList = getTags();
    const [markdownText,setMarkdownText]=React.useState('')

    // 提交表单
    const handleSubmit = () => {

        const newPostData: Post = {
            id:postListLength(),
            userId,
            title:form.getFieldValue("title"),
            content:markdownText,
            tagId:[form.getFieldValue("tagId")],
            createTime:"",
            updateTime:"",
            imgUrlList:[],
            readCount:0,
            commentCount:0
        };
        newPost(newPostData);
        navigate("/posts");
    };

    return (
        <Form
            form={form}
            className="max-w-2xl m-auto"
            layout="vertical"
            onFinish={handleSubmit}
        >
            <Form.Item
                label="标题"
                name="title"
                rules={[{ required: true, message: '请输入标题' }]}
            >
                <Input placeholder="请输入文章标题" />
            </Form.Item>

            <Form.Item
                label="标签"
                name="tagId"
                className="w-40"
                rules={[{ required: true, message: '请选择标签' }]}
            >
                <Select placeholder="请选择标签">
                    {tagList.map((item) => (
                        <Select.Option key={item.id} value={item.id}>
                            {item.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item label="内容">
                <EditorComponent text={markdownText} setText={setMarkdownText}>
                    发布帖子
                </EditorComponent>
            </Form.Item>
        </Form>
    );
};