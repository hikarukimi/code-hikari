import {Tag} from "antd";
import {getTag} from "../../../../dataSource/tag";
import {Post} from "../../../../dataSource/post";
import {Book} from "../../../../dataSource/book";

export const SearchItem = (props:{postOrBook:Post|Book}) => {

    const postOrBook=props.postOrBook

    return (
        <>
            <div className={"flex justify-start"}>
                <div className={"mr-12 text-gray-300 text-center"}>
                    <div>{postOrBook.commentCount}</div>
                    <p>回答</p>
                </div>
                <div className={"mr-24 text-gray-300 text-center"}>
                    <div>{postOrBook.readCount}</div>
                    <p>浏览</p>
                </div>
                <div className={"mb-6"}>
                    <div >{postOrBook.title}</div>
                    <br/>
                    <div className={"flex justify-start"}>
                        {
                            postOrBook.tagId.map(tagId => (
                                <Tag key={tagId} color={getTag(tagId).color}>
                                    {getTag(tagId).name}
                                </Tag>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};