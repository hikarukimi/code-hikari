import {postList} from "../../../../dataSource/post";
import React, {useState} from "react";
import {PostItem} from "./PostItem";
import {Pagination} from "antd";
import {TagList} from "../TagList";
import {TagType} from "../../../../dataSource/tag";

export const Posts = () => {

    let [posts,setPosts]=useState(postList())
    let [currentPage,setCurrentPage]=useState(1)
    let defaultPageSize=8

    let renderPosts=(currentPage:number,pageSize:number)=>{
        return posts.filter((post,index)=>{return index>=defaultPageSize*(currentPage-1)&&index<defaultPageSize*currentPage}).map((post)=>{
            return <PostItem id={post.id} key={post.id}/>
        })
    }
    const filterPosts=(tag:TagType)=>{
        setPosts(postList().filter((post)=>{
            if (tag.id===11){
                return true
            }
            return post.tagId.includes(tag.id)
        }))
        setCurrentPage(1)
    }

    return (
        <>
            <div>
                <div className={"flex items-center"}>
                    <h1 className={"mr-20 text-3xl font-bold mb-4 text-gray-300"}>{"问题列表"}</h1>
                    <TagList setFunction={filterPosts}></TagList>
                </div>
                {
                    renderPosts(currentPage, defaultPageSize)
                }
                <Pagination defaultPageSize={defaultPageSize} current={currentPage}
                            total={posts.length} onChange={(page) => {
                    setCurrentPage(page)
                }}></Pagination>
            </div>
        </>
    );
};