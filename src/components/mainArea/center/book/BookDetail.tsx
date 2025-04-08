import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import {  Book } from "../../../../dataSource/book";
import { Avatar, Form, Rate, Divider, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EditorComponent } from "../../../common/Editor";
import { CommentList } from "../comment/CommentList";
import { useUserStore } from "../../../../zustand/userStore";
import {getBookById} from "../../../../dataSource/book";
import {addBookComment, BookComment, getCommentsByBookId} from "../../../../dataSource/bookComment";

const { Title, Text, Paragraph } = Typography;

export const BookDetail = () => {
    const { bookId } = useParams();
    const book = getBookById(Number(bookId)) as Book;
    const myId = useUserStore((user) => user.userId);
    const [markdownText, setMarkdownText] = useState("");
    const [comments, setComments] = useState<BookComment[]>(getCommentsByBookId(Number(bookId)));
    const [rating, setRating] = useState(book?.averageRating || 0);

    // 更新阅读量
    book.readCount++;

    const loadComments = () => {
        const bookComments = getCommentsByBookId(Number(bookId));
        setComments(bookComments);
    };

    const onSubmit =() => {
        if (myId === undefined) {
            alert("请先登录");
            return;
        }
        try {
            addBookComment({
                bookId: Number(bookId),
                userId: myId,
                content: markdownText,
                createTime: new Date().toISOString()
            });
            setMarkdownText("");
            loadComments();
            book.commentCount++;
        } catch (error) {
            console.error("添加评论失败:", error);
            alert("评论发布失败");
        }
    };

    const handleRate = (value: number) => {
        setRating(value);
        // 这里可以添加提交评分到后端的逻辑
        // updateBookRating(Number(bookId), value);
    };

    return (
        <Fragment>
            <div>
                <div className="flex items-center">
                    <Title level={2} className="mr-20 mb-4 text-gray-800">书籍详情</Title>
                </div>

                {/* 书籍基本信息 */}
                <div className="flex gap-8">
                    <div className="w-1/4">
                        <img
                            src={book?.coverImage?book.coverImage:"https://picsum.photos/200/300"}
                            alt={book?.title}
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-3/4">
                        <Title level={3}>{book?.title}</Title>
                        <div className="flex items-center gap-4 mt-2">
                            <Avatar size="default" icon={<UserOutlined/>}/>
                            <Text strong>{book.author}</Text>
                            <Text type="secondary">出版时间: {book?.publishDate}</Text>
                        </div>

                        <div className="mt-4 flex items-center">
                            <Rate
                                allowHalf
                                value={rating}
                                onChange={handleRate}
                                className="mr-4"
                            />
                            <Text>{rating.toFixed(1)} 分 ({book?.ratingCount}人评价)</Text>
                        </div>

                        <Divider/>

                        <Title level={4}>书籍简介</Title>
                        <Paragraph className="text-gray-700">
                            {book?.description}
                        </Paragraph>

                        <div className="mt-4 flex gap-4">
                            <Text>ISBN: {book?.isbn}</Text>
                            <Text>页数: {book?.pageCount}</Text>
                            <Text>出版社: {book?.publisher}</Text>
                        </div>
                    </div>
                </div>

                {/* 书籍内容 */}
                <Divider/>
                <Title level={4}>内容概要</Title>
                <div
                    dangerouslySetInnerHTML={{__html: book?.description}}
                    className="mt-4 p-4 bg-gray-50 rounded-lg"
                />

                {/* 评论区域 */}
                <Divider/>
                <Title level={4}>读者评论 ({book?.commentCount})</Title>

                <div className={"flex mt-8 gap-4"}>
                    <Avatar size={"large"} icon={<UserOutlined/>}></Avatar>
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

                <div className="mt-8">
                    <CommentList
                        id={Number(bookId)}
                        dataSource={comments}
                    />
                </div>
            </div>
        </Fragment>
    );
};