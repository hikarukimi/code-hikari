import {getPost, Post} from "../../../../dataSource/post";
import {Tag} from "antd";
import {getTag} from "../../../../dataSource/tag";
import {getUserById} from "../../../../dataSource/user";
import {useNavigate} from "react-router-dom";

export const PostItem = (props:{id:number}) => {

    const navigator=useNavigate()
    let post=getPost(props.id) as Post


    let user=getUserById(post.userId)

    let toDetail=() => {
        navigator(`/postDetail/${post.id}`)
    }

    return (
        <>
            <div className={"flex justify-start"}>
                <div className={"mr-12 text-gray-300 text-center"}>
                    <div>{post.commentCount}</div>
                    <p>回答</p>
                </div>
                <div className={"mr-24 text-gray-300 text-center"}>
                    <div>{post.readCount}</div>
                    <p>浏览</p>
                </div>
                <div className={"mb-6"}>
                    <div onClick={toDetail}>{post.title}</div>
                    <br/>
                    <div className={"flex justify-start"}>
                        {
                            post.tagId.map(tagId => (
                                <Tag key={tagId} color={getTag(tagId).color}>
                                    {getTag(tagId).name}
                                </Tag>
                            ))
                        }
                        <p className={"mr-3"}>{user?.username}</p>
                        <p className={"text-gray-300"}>{post.createTime}</p>
                    </div>
                </div>
            </div>
        </>
    );
};