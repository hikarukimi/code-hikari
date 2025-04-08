export type Post={
    id:number,
    userId:number,
    title:string,
    createTime:string,
    updateTime:string,
    content:string,
    tagId:number[],
    imgUrlList:string[],
    readCount:number,
    commentCount:number
}


export const postList=()=>{
    return posts
}
export const postListLength=()=>{
    return posts.length
}
export const getPost=(id:number)=>{
    return posts.find(post=>post.id===id)
}
export const newPost=(post:Post)=>{
    posts.unshift(post)
}
export  const filterByTag=(tagId:number)=>{
    if(tagId===11){
        return posts
    }
    return posts.filter(post=>post.tagId.includes(tagId))
}
export function getPostsByContent(content: string, page: number = 1, size: number = 10): Post[] {
    // 处理空内容的情况，返回空数组
    if (!content || content === '' || content.length === 0) {
        return [];
    }

    // 过滤书籍
    let filteredBooks = posts.filter(post => {
        return post.title.includes(content)
    });

    // 实现分页逻辑
    let startIndex = (page - 1) * size;
    let endIndex = startIndex + size;
    return filteredBooks.slice(startIndex, endIndex);
}


const posts=[
    {
        "id": 1,
        "userId": 5,
        "title": "React Hooks最佳实践分享",
        "createTime": "2023-05-15T09:30:00Z",
        "updateTime": "2023-05-16T14:15:00Z",
        "content": "本文将介绍我们在项目中总结的10个Hooks使用技巧...",
        "tagId": [1, 7],
        "imgUrlList": [
            "https://example.com/images/react-hooks-1.jpg",
            "https://example.com/images/react-hooks-2.png"
        ],
        "readCount": 0,
        "commentCount": 10
    },
    {
        "id": 2,
        "userId": 12,
        "title": "我的全栈开发环境配置",
        "createTime": "2023-06-02T16:45:00Z",
        "updateTime": "2023-06-03T10:20:00Z",
        "content": "分享我的VSCode配置+Zsh主题+Docker开发环境...",
        "tagId": [2, 7, 12],
        "imgUrlList": [
            "https://example.com/images/dev-setup.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 3,
        "userId": 8,
        "title": "凌晨三点修复生产环境BUG实录",
        "createTime": "2023-06-18T03:15:00Z",
        "updateTime": "2023-06-18T03:15:00Z",
        "content": "记一次惊心动魄的线上事故排查过程...",
        "tagId": [5],
        "imgUrlList": [],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 4,
        "userId": 3,
        "title": "如何用算法优化前端性能",
        "createTime": "2023-07-05T11:20:00Z",
        "updateTime": "2023-07-07T09:10:00Z",
        "content": "当LRU缓存算法遇上Vue组件树...",
        "tagId": [1, 3],
        "imgUrlList": [
            "https://example.com/images/algorithm-perf.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 5,
        "userId": 19,
        "title": "我的机械键盘收藏",
        "createTime": "2023-07-12T18:30:00Z",
        "updateTime": "2023-07-13T12:00:00Z",
        "content": "展示我收集的5款程序员专属机械键盘...",
        "tagId": [12],
        "imgUrlList": [
            "https://example.com/images/keyboard-1.jpg",
            "https://example.com/images/keyboard-2.jpg"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 6,
        "userId": 7,
        "title": "Kubernetes入门指南",
        "createTime": "2023-08-01T14:00:00Z",
        "updateTime": "2023-08-05T16:45:00Z",
        "content": "从零开始搭建你的第一个K8s集群...",
        "tagId": [8],
        "imgUrlList": [
            "https://example.com/images/k8s-arch.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 7,
        "userId": 15,
        "title": "远程办公三年经验谈",
        "createTime": "2023-08-11T10:15:00Z",
        "updateTime": "2023-08-12T11:30:00Z",
        "content": "分享我在GitHub远程工作的时间管理技巧...",
        "tagId": [15],
        "imgUrlList": [],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 8,
        "userId": 4,
        "title": "Vim配置终极指南",
        "createTime": "2023-08-20T13:50:00Z",
        "updateTime": "2023-08-25T17:20:00Z",
        "content": "经过五年打磨的Vim配置分享...",
        "tagId": [11],
        "imgUrlList": [
            "https://example.com/images/vim-config.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 9,
        "userId": 9,
        "title": "如何写出优雅的单元测试",
        "createTime": "2023-09-03T15:30:00Z",
        "updateTime": "2023-09-05T10:45:00Z",
        "content": "从Jest实践谈测试代码的可维护性...",
        "tagId": [14],
        "imgUrlList": [
            "https://example.com/images/jest-test.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 10,
        "userId": 2,
        "title": "咖啡与编码效率研究",
        "createTime": "2023-09-12T08:20:00Z",
        "updateTime": "2023-09-12T08:20:00Z",
        "content": "实测不同咖啡因摄入量对debug速度的影响...",
        "tagId": [4],
        "imgUrlList": [
            "https://example.com/images/coffee-code.jpg"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 11,
        "userId": 6,
        "title": "TypeScript高级类型技巧",
        "createTime": "2023-09-18T11:10:00Z",
        "updateTime": "2023-09-20T14:25:00Z",
        "content": "深入讲解Utility Types的实际应用场景...",
        "tagId": [1],
        "imgUrlList": [
            "https://example.com/images/typescript-types.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 12,
        "userId": 14,
        "title": "我的开源项目成长记",
        "createTime": "2023-10-05T16:40:00Z",
        "updateTime": "2023-10-07T09:15:00Z",
        "content": "从零到1000 star的心路历程...",
        "tagId": [6],
        "imgUrlList": [
            "https://example.com/images/github-stats.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 13,
        "userId": 11,
        "title": "Web3开发入门实战",
        "createTime": "2023-10-12T13:25:00Z",
        "updateTime": "2023-10-15T11:50:00Z",
        "content": "使用Solidity构建你的第一个NFT合约...",
        "tagId": [13],
        "imgUrlList": [
            "https://example.com/images/web3-dapp.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 14,
        "userId": 17,
        "title": "程序员颈椎康复指南",
        "createTime": "2023-10-20T09:05:00Z",
        "updateTime": "2023-10-22T14:30:00Z",
        "content": "多年颈椎病患者的自我救赎经验...",
        "tagId": [15],
        "imgUrlList": [
            "https://example.com/images/neck-exercise.jpg"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 15,
        "userId": 10,
        "title": "微服务架构设计模式",
        "createTime": "2023-11-01T14:50:00Z",
        "updateTime": "2023-11-03T16:20:00Z",
        "content": "Spring Cloud与K8s的完美结合实践...",
        "tagId": [2, 8],
        "imgUrlList": [
            "https://example.com/images/microservices.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 16,
        "userId": 1,
        "title": "前端性能优化全攻略",
        "createTime": "2023-11-08T10:30:00Z",
        "updateTime": "2023-11-10T12:45:00Z",
        "content": "从Lighthouse评分20到90的蜕变...",
        "tagId": [1, 3],
        "imgUrlList": [
            "https://example.com/images/lighthouse-score.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 17,
        "userId": 13,
        "title": "我的Vim快捷键图谱",
        "createTime": "2023-11-15T15:15:00Z",
        "updateTime": "2023-11-17T18:30:00Z",
        "content": "精心整理的Vim脑图分享...",
        "tagId": [11],
        "imgUrlList": [
            "https://example.com/images/vim-cheatsheet.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 18,
        "userId": 16,
        "title": "程序员面试算法题库",
        "createTime": "2023-11-22T11:20:00Z",
        "updateTime": "2023-11-25T09:40:00Z",
        "content": "大厂高频算法题分类解析...",
        "tagId": [3, 10],
        "imgUrlList": [
            "https://example.com/images/algo-questions.png"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 19,
        "userId": 18,
        "title": "如何高效摸鱼不挨骂",
        "createTime": "2023-12-01T13:45:00Z",
        "updateTime": "2023-12-03T14:50:00Z",
        "content": "资深摸鱼工程师的自我修养...",
        "tagId": [9],
        "imgUrlList": [
            "https://example.com/images/moyu-tips.jpg"
        ],
        "readCount": 0,
        "commentCount": 0
    },
    {
        "id": 20,
        "userId": 20,
        "title": "2023年技术栈趋势报告",
        "createTime": "2023-12-10T16:00:00Z",
        "updateTime": "2023-12-12T10:30:00Z",
        "content": "基于GitHub数据的年度技术分析...",
        "tagId": [1, 2, 13],
        "imgUrlList": [
            "https://example.com/images/tech-trends.png"
        ],
        "readCount": 0,
        "commentCount": 0
    }
]
