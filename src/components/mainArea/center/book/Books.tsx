import {Col, Pagination, Row} from "antd";
import React, {useState} from "react";
import {TagList} from "../TagList";
import {filterBooksByTagWithPage, getCurrentPage} from "../../../../dataSource/book";
import {TagType} from "../../../../dataSource/tag";
import {BookItem} from "./BookItem";
import {useNavigate} from "react-router-dom";

export const Books = () => {

    let [currentPage,setCurrentPage]=useState(1)
    let defaultPageSize=12
    const [books,setBooks]=useState(getCurrentPage(currentPage, defaultPageSize))
    const navigator=useNavigate()

    const filterBooks=(tag:TagType)=>{
        setBooks(filterBooksByTagWithPage(tag))
        setCurrentPage(1)
    }

    return (
        <>
            <div >
                <div className={"flex items-center"}>
                    <h1 className={"mr-20 text-3xl font-bold mb-4 text-gray-300"}>{"精品书籍"}</h1>
                </div>
                <TagList setFunction={filterBooks}></TagList>
                <Row gutter={[8, 8]}> {/* 16是列间距，[水平, 垂直] */}
                    {books.map((book, index) => (
                        <Col
                            key={book.id}
                            xs={24}  // 手机端：每行1个
                            sm={12}  // 平板：每行2个
                            md={8}   // 小桌面：每行3个
                            lg={6}   // 大桌面：每行4个
                            xl={4.8} // 超大桌面：每行5个（24/5=4.8）
                            className={"mb-4 mr-4"}
                        >
                            <div onClick={()=>{navigator(`/bookDetail/${book.id}`)}}>
                                <BookItem book={book}  />
                            </div>

                        </Col>
                    ))}
                </Row>
                <Pagination defaultPageSize={defaultPageSize} current={currentPage}
                            total={books.length} onChange={(page) => {
                    setCurrentPage(page)
                    setBooks(getCurrentPage(page, defaultPageSize))
                }}></Pagination>
            </div>
        </>
    );
};