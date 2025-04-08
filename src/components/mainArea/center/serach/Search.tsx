import { useSearchParams } from 'react-router-dom';
import {SearchItem} from "./SearchItem";
import {Book, getBooksByContent} from "../../../../dataSource/book";
import {getPostsByContent, Post} from "../../../../dataSource/post";
import React, {useEffect, useState} from "react";
import {Pagination} from "antd";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const [content, setContent] = useState(() => searchParams.get("content") as string || '');
    const [type, setType] = useState(() => searchParams.get("type") || '');
    const [books, setBooks] = useState<Book[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage,setCurrentPage]=useState(1)
    const defaultPageSize=8

    if (searchParams.get("content")!== content){
        setContent(searchParams.get("content") as string);
    }
    if (searchParams.get("type")!== type){
        setType(searchParams.get("type") as string);
    }

    useEffect(() => {

        if (type === "book") {
            setBooks(getBooksByContent(content));
        } else if (type === "post") {
            setPosts(getPostsByContent(content));
        } else {
            setBooks([]);
            setPosts([]);
        }
    }, [content, type]);

    const renderSearchItem = () => {

        if(books.length===0&&posts.length===0){
            return <div className="text-center text-gray-300">暂无数据</div>
        }

        if (type === "book") {
            return books.map((book) => (
                <SearchItem key={book.id} postOrBook={book} />
            ));
        } else {
            return posts.map((post) => (
                <SearchItem key={post.id} postOrBook={post} />
            ));
        }
    };

    return (
        <>
            <div className="flex items-center">
                <h1 className="mr-20 text-3xl font-bold mb-4 text-gray-300">搜索结果</h1>
            </div>
            {renderSearchItem()}
            <Pagination defaultPageSize={defaultPageSize} current={currentPage}
                        total={posts.length} onChange={(page) => {
                setCurrentPage(page)
            }}></Pagination>
        </>
    );
};