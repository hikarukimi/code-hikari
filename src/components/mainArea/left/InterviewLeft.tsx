import React from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import {getInterviewCategory} from "../../../dataSource/interviewCategory";
import {useInterviewCurStore} from "../../../zustand/interviewCurStore";


const { DirectoryTree } = Tree;
const treeData: TreeDataNode[] = getInterviewCategory()
export const InterviewLeft = () => {


    const setInterviewId=useInterviewCurStore((state)=>state.setInterviewId)
    setInterviewId(undefined)

    return (
            <DirectoryTree
            draggable
            treeData={treeData}
            onSelect={(selectedKeys, info) => {
                console.log('selected', selectedKeys, info);
                setInterviewId(Number(info.node.key))
            }}
            />
    );
};