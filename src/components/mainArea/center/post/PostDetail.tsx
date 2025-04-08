import React, {Fragment, useState} from "react";
import { useParams } from "react-router-dom";
import { getPost, Post} from "../../../../dataSource/post";
import { Avatar, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserById } from "../../../../dataSource/user";
import { EditorComponent } from "../../../common/Editor";
import { CommentList } from "../comment/CommentList";
import { useUserStore } from "../../../../zustand/userStore";
import {addPostComment, getCommentsByPostId, PostComment} from "../../../../dataSource/postComment";

export const PostDetail = () => {
    const { postId } = useParams();
    const post = getPost(Number(postId)) as Post;
    const user = getUserById(post?.userId as number);
    const myId = useUserStore((user) => user.userId);
    const [markdownText, setMarkdownText] = React.useState("");
    const [comments, setComments] = useState<PostComment[]>(getCommentsByPostId(Number(postId)));

    post.readCount++

    const loadComments = () => {
        const postComments =getCommentsByPostId(Number(postId));
        setComments(postComments);
    };

    const onSubmit = async () => {
        if (myId === undefined) {
            alert("请先登录");
            return;
        }
        try {
            addPostComment({
                postId: Number(postId),
                userId: myId,
                content: markdownText,
                createTime: new Date().toISOString()
            });
            setMarkdownText("");
            loadComments();
            post.commentCount++
        } catch (error) {
            console.error("添加评论失败:", error);
            alert("评论发布失败");
        }
    };

    return (
        <Fragment>
            <div>
                <div className={"flex items-center"}>
                    <h1 className={"mr-20 text-3xl font-bold mb-4 text-gray-300"}>{"问题详情"}</h1>
                </div>
                <h1 className={"text-2xl font-bold mt-4"}>{post?.title}</h1>
                <div className={"mt-4 flex items-center gap-4"}>
                    <Avatar size={"default"} icon={<UserOutlined />} />
                    <p>{user?.username}</p>
                    <p>发布于:{post?.createTime}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post?.content }} className={"mt-8"}>
                </div>
                <div className={"flex mt-8 gap-4"} >
                    <Avatar size={"large"} icon={<UserOutlined />}></Avatar>
                    <Form onFinish={onSubmit} className={"max-w-2xl"}>
                        <Form.Item>
                            <EditorComponent
                                text={markdownText}
                                setText={setMarkdownText}
                                className={"mr-16"}
                            >
                                发布评论
                            </EditorComponent>
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <CommentList
                        id={Number(postId)}
                        dataSource={comments}
                    />
                </div>

            </div>
        </Fragment>
    );
};