export interface BookComment {
    id: number;
    bookId: number;
    userId: number;
    content: string;
    createTime: string;
    rating?: number; // 新增可选字段，书籍评论特有评分
}

/**
 * 获取某本书的所有评论（按时间倒序）
 */
export function getCommentsByBookId(bookId: number): BookComment[] {
    return bookComments
        .filter(comment => comment.bookId === bookId)
        .sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
}

/**
 * 添加新书评（带可选评分）
 */
export function addBookComment(newComment: Omit<BookComment, "id">): BookComment {
    const id = Math.max(0, ...bookComments.map(c => c.id)) + 1;
    const comment: BookComment = { id, ...newComment };
    bookComments.push(comment);
    return comment;
}

/**
 * 更新书评内容
 */
export function updateBookComment(id: number, content: string, rating?: number): BookComment | null {
    const comment = bookComments.find(c => c.id === id);
    if (!comment) return null;

    comment.content = content;
    if (rating !== undefined) {
        comment.rating = rating;
    }
    return comment;
}

/**
 * 删除书评
 */
export function deleteBookComment(id: number): boolean {
    const initialLength = bookComments.length;
    bookComments = bookComments.filter(c => c.id !== id);
    return bookComments.length !== initialLength;
}

// 初始书评数据
let bookComments: BookComment[] = [
    {
        id: 201,
        bookId: 1,
        userId: 12,
        content: "这本书对JavaScript核心概念讲解得非常透彻，特别是原型链部分！",
        rating: 5,
        createTime: "2023-06-10T09:20:00Z"
    },
    {
        id: 202,
        bookId: 1,
        userId: 8,
        content: "适合有一定基础的人阅读，初学者可能会觉得有些章节比较难懂",
        rating: 4,
        createTime: "2023-06-11T14:35:00Z"
    },
    {
        id: 203,
        bookId: 2,
        userId: 15,
        content: "TypeScript类型系统讲得很深入，团队协作必备指南！",
        rating: 5,
        createTime: "2023-06-12T10:15:00Z"
    },
    {
        id: 204,
        bookId: 3,
        userId: 22,
        content: "通过这本书终于理解了Fiber架构，作者源码分析能力很强",
        rating: 5,
        createTime: "2023-06-13T16:40:00Z"
    },
    {
        id: 205,
        bookId: 4,
        userId: 7,
        content: "Node.js实战案例很丰富，但部分示例代码需要更新了",
        rating: 3,
        createTime: "2023-06-14T11:25:00Z"
    },
    {
        id: 206,
        bookId: 5,
        userId: 30,
        content: "CSS权威指南名副其实，Flexbox和Grid部分特别实用",
        rating: 4,
        createTime: "2023-06-15T13:50:00Z"
    },
    {
        id: 207,
        bookId: 6,
        userId: 18,
        content: "Python入门最佳选择，项目实战部分很有启发性",
        rating: 5,
        createTime: "2023-06-16T09:05:00Z"
    },
    {
        id: 208,
        bookId: 7,
        userId: 4,
        content: "算法圣经，就是有些数学证明需要反复琢磨才能理解",
        rating: 4,
        createTime: "2023-06-17T15:30:00Z"
    },
    {
        id: 209,
        bookId: 8,
        userId: 27,
        content: "设计模式图解很生动，比纯文字解释直观多了",
        rating: 5,
        createTime: "2023-06-18T10:55:00Z"
    },
    {
        id: 210,
        bookId: 9,
        userId: 11,
        content: "Go语言并发模型讲得很清楚，适合转Go的开发者",
        rating: 4,
        createTime: "2023-06-19T14:20:00Z"
    }
];