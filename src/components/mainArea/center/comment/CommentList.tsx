import {Avatar, List} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {getUserById} from "../../../../dataSource/user";
import {useState} from "react";

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

export const CommentList = (props:{
    id:number,
    dataSource:any[]
}) => {

    const [position] = useState<PaginationPosition>('bottom');
    const [align] = useState<PaginationAlign>('center');

    return (
        <>
            <List
                pagination={{ position, align }}
                header={<div>当前评论</div>}
                bordered
                dataSource={props.dataSource}
                renderItem={(item) => (
                    <List.Item >
                        <div className={"flex gap-4"}>
                            <Avatar icon={<UserOutlined/>} className={"w-8 m-0"}></Avatar>
                            <div className={"mr-16"}>
                                <p>{getUserById(item.userId)?.username}</p>
                                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            </div>
                        </div>
                    </List.Item>
                )}
                className={"mb-6"}
            />
        </>
    );
};