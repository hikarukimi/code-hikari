import {Tag} from "antd";
import React from "react";
import {getTags, TagType} from "../../../dataSource/tag";

export const TagList = (props:{
    setFunction: Function
}) => {

    const tags=getTags();
    const filter = (tag:TagType)=> {
        props.setFunction(tag)
    };

    const getTagList=()=>{
        return tags.map((tag) => {
            return <Tag key={tag.id} color={tag.color}
                        className={"text-center h-6 mb-3"} onClick={()=>filter(tag)}>{tag.name}
                   </Tag>
        });
    }

    return (
        <>
            {
                getTagList()
            }
        </>
    );
};