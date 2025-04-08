export interface PostComment {
    id: number;
    postId: number;
    userId: number;
    content: string;
    createTime: string;
}

/**
 * 获取某篇帖子的所有评论
 */
export function getCommentsByPostId(postId: number): PostComment[] {
    return postComments.filter(comment => comment.postId === postId);
}

/**
 * 添加新评论
 */
export function addPostComment(newComment: Omit<PostComment, "id">): PostComment {
    const id = Math.max(...postComments.map(c => c.id)) + 1;
    const comment: PostComment = { id, ...newComment };
    postComments.unshift(comment);
    return comment;
}

/**
 * 更新评论内容
 */
function updateComment(id: number, content: string): PostComment | null {
    const comment = postComments.find(c => c.id === id);
    if (!comment) return null;
    comment.content = content;
    return comment;
}

/**
 * 删除评论
 */
function deleteComment(id: number): boolean {
    const initialLength = postComments.length;
    postComments = postComments.filter(c => c.id !== id);
    return postComments.length !== initialLength;
}

let postComments:PostComment[]=[
    {
        "id": 101,
        "postId": 1,
        "userId": 12,
        "content": "感谢分享！特别是第5个技巧，真的帮我解决了 useEffect 的依赖项问题！👍",
        "createTime": "2023-05-15T10:15:00Z"
    },
    {
        "id": 102,
        "postId": 1,
        "userId": 8,
        "content": "写得非常详细！期待更多关于自定义 Hook 的深度解析！",
        "createTime": "2023-05-15T11:20:00Z"
    },
    {
        "id": 103,
        "postId": 1,
        "userId": 23,
        "content": "图片示例很直观，能结合代码片段就更好了！",
        "createTime": "2023-05-15T12:45:00Z"
    },
    {
        "id": 104,
        "postId": 1,
        "userId": 17,
        "content": "作为 React 新手，这篇文章让我对 Hooks 的理解清晰了很多，收藏了！",
        "createTime": "2023-05-15T14:30:00Z"
    },
    {
        "id": 105,
        "postId": 1,
        "userId": 5,
        "content": "第7个技巧在实际项目中真的很有用，减少了不必要的渲染优化！",
        "createTime": "2023-05-16T09:10:00Z"
    },
    {
        "id": 106,
        "postId": 1,
        "userId": 30,
        "content": "有没有关于 useMemo 和 useCallback 更详细的性能对比？想深入学习！",
        "createTime": "2023-05-16T10:25:00Z"
    },
    {
        "id": 107,
        "postId": 1,
        "userId": 42,
        "content": "感谢作者！这些最佳实践让我们团队的代码质量提升了不少！",
        "createTime": "2023-05-16T13:40:00Z"
    },
    {
        "id": 108,
        "postId": 1,
        "userId": 19,
        "content": "Hooks 确实比 Class 组件简洁多了，但调试起来还是有点挑战。",
        "createTime": "2023-05-17T08:50:00Z"
    },
    {
        "id": 109,
        "postId": 1,
        "userId": 11,
        "content": "能分享一下在大型项目中如何组织 Hooks 吗？感觉容易混乱。",
        "createTime": "2023-05-17T15:20:00Z"
    },
    {
        "id": 110,
        "postId": 1,
        "userId": 25,
        "content": "React Hooks 让代码更干净了，但学习曲线还是有的，这篇文章很有帮助！",
        "createTime": "2023-05-18T16:05:00Z"
    }
]