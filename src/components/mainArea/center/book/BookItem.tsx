import {Book} from "../../../../dataSource/book";
import {Image} from "antd";

export const BookItem = (props:{
    book:Book
}) => {
    return (
        <>
            <div>
                <Image width={180} height={180} preview={false} src={props.book?.coverImage?props.book.coverImage:"https://picsum.photos/200/300"}></Image>
                <p className={"font-bold whitespace-nowrap overflow-hidden w-44"}>{props.book.title}</p>
                <div className={"flex justify-between text-gray-400 w-44 "}>
                    <div>浏览数:{props.book.readCount}</div>
                    <div>评论数:{props.book.commentCount}</div>
                </div>
            </div>
        </>
    );
};