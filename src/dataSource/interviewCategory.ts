import {TreeDataNode} from "antd";

type OriginalQuestionNode = {
    id: number;
    title: string;
    language?: string;
    difficulty?: string;
    frequency?: string;
    tags?: string[];
    comparison?: string[];
    codeExample?: boolean;
    diagram?: boolean;
    coding?: boolean;
    hot?: boolean;
    children?: OriginalQuestionNode[]|undefined;
};

function convertToTreeData(
    originalData: OriginalQuestionNode[],
    parentKey = '0'
): TreeDataNode[] {
    return originalData.map((node, index) => { // 关键修复：改为 originalData
        const currentKey = parentKey + '-' + index;
        const hasChildren = node.children && node.children.length > 0;

        return {
            title: node.title,
            key: node.id,
            isLeaf: !hasChildren,
            children: hasChildren ? convertToTreeData(node.children||[], currentKey) : undefined
        };
    });
}

export function getInterviewCategory(){
    return convertToTreeData(interviewCategory)
}

const interviewCategory=[
    {
        "id": 1,
        "title": "Java面试题",
        "language": "java",
        "difficulty": "medium",
        "children": [
            {
                "id": 101,
                "title": "Java基础",
                "tags": ["OOP", "泛型"],
                "children": [
                    {
                        "id": 1001,
                        "title": "String为什么是不可变的？",
                        "type": "理论题"
                    },
                    {
                        "id": 1002,
                        "title": "HashMap的扩容机制",
                        "codeExample": true
                    }
                ]
            },
            {
                "id": 102,
                "title": "JVM",
                "hot": true,
                "children": [
                    {
                        "id": 1003,
                        "title": "垃圾回收算法对比",
                        "comparison": ["G1", "CMS"]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "JavaScript面试题",
        "language": "javascript",
        "children": [
            {
                "id": 201,
                "title": "ES6",
                "children": [
                    {
                        "id": 2001,
                        "title": "解释Event Loop机制",
                        "diagram": true
                    }
                ]
            },
            {
                "id": 202,
                "title": "闭包",
                "frequency": "high",
                "children": [
                    {
                        "id": 2002,
                        "title": "写一个防抖函数",
                        "coding": true
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "系统设计",
        "category": "advanced",
        "children": [
            {
                "id": 301,
                "title": "设计短链系统",
                "whiteboard": true
            }
        ]
    }
]