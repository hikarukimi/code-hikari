import {TagType} from "./tag";

export type Book={
    "id": number,
    "title": string,
    "author": string,
    "isbn":string,
    "pageCount":number,
    "publisher":string
    "publishDate":string,
    "readCount": number,
    "ratingCount":number
    "commentCount": number,
    "description": string,
    "averageRating":number,
    "coverImage": string,
    "tagId": number[],
}

/**
 * 根据标签ID筛选书籍并分页
 * @param tag - 标签对象
 * @param page - 当前页码（从1开始）
 * @param size - 每页数量
 * @returns 匹配该标签的书籍数组（已分页）
 */
export function filterBooksByTagWithPage(
    tag: TagType,
    page: number = 1,
    size: number = 12
): Book[] {
    // 处理全部分类（假设tag.id=11表示"全部"）
    const filteredBooks = tag.id === 11
        ? [...books]
        : books.filter(book => book.tagId?.includes(tag.id) ?? false);
    console.log(filteredBooks)
    // 计算分页范围
    const start = (page-1) * size;
    const end = start + size;

    // 返回分页后的数据
    return filteredBooks.slice(start, end);
}

/**
 * 获取所有书籍
 * @returns 书籍数组的深拷贝
 */
export function getBooks(): Book[] {
    return books.map(book => ({...book}));
}

export function getBookById(id: number): Book | undefined {
    return books.find(book => book.id === id);
}

export function getBookCount(): number {
    return books.length;
}

/**
 * 获取分页数据
 * @param page - 当前页码(从1开始)
 * @param size - 每页数量
 * @returns 当前页的书籍数组
 */
export function getCurrentPage(page: number, size: number): Book[] {
    const start = (page - 1) * size;
    const end = start + size;
    const result= books.slice(start, end);
    return result.map(book => ({...book}));
}

/**
 * 根据内容搜索书籍(支持标题和作者)
 * @param content - 搜索关键词
 * @param page - 当前页码(默认1)
 * @param size - 每页数量(默认10)
 * @returns 匹配的书籍数组(已分页)
 */
export function getBooksByContent(
    content: string,
    page: number = 1,
    size: number = 10
): Book[] {
    if (!content?.trim()) return [];

    const keyword = content.toLowerCase();
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
    );

    const start = (page - 1) * size;
    return filtered.slice(start, start + size);
}

/**
 * 根据评分筛选书籍(新增方法)
 * @param minRating - 最低评分
 * @returns 评分>=minRating的书籍
 */
export function getBooksByRating(minRating: number): Book[] {
    return books.filter(book => book.averageRating >= minRating);
}

/**
 * 获取热门书籍(新增方法)
 * @param limit - 返回数量
 * @returns 按阅读量降序排列的书籍
 */
export function getPopularBooks(limit: number = 5): Book[] {
    return [...books]
        .sort((a, b) => b.readCount - a.readCount)
        .slice(0, limit);
}

export const books: Book[] = [
    {
        id: 1,
        title: "JavaScript高级程序设计",
        author: "Nicholas C. Zakas",
        isbn: "9787115275790",
        pageCount: 748,
        publisher: "人民邮电出版社",
        publishDate: "2012-03-01",
        readCount: 15600,
        ratingCount: 3421,
        commentCount: 892,
        description: "本书是JavaScript技术经典读物，全面介绍了JavaScript语言的核心概念和Web开发实践。",
        averageRating: 4.7,
        coverImage: "",
        tagId: [1, 3, 5]
    },
    {
        id: 2,
        title: "深入理解TypeScript",
        author: "Basarat Ali Syed",
        isbn: "9787121389039",
        pageCount: 432,
        publisher: "电子工业出版社",
        publishDate: "2020-05-01",
        readCount: 8900,
        ratingCount: 2105,
        commentCount: 456,
        description: "TypeScript核心团队成员作品，深入解析TypeScript语言特性。",
        averageRating: 4.5,
        coverImage: "",
        tagId: [2, 3, 6]
    },
    {
        id: 3,
        title: "React设计原理与实现",
        author: "卡颂",
        isbn: "9787115583864",
        pageCount: 368,
        publisher: "机械工业出版社",
        publishDate: "2021-08-01",
        readCount: 12300,
        ratingCount: 2987,
        commentCount: 721,
        description: "从源码角度剖析React实现原理，深入理解现代前端框架设计思想。",
        averageRating: 4.8,
        coverImage: "",
        tagId: [1, 4, 7]
    },
    {
        id: 4,
        title: "Node.js实战",
        author: "Mike Cantelon",
        isbn: "9787115369093",
        pageCount: 512,
        publisher: "人民邮电出版社",
        publishDate: "2014-11-01",
        readCount: 18700,
        ratingCount: 4123,
        commentCount: 1024,
        description: "通过实际案例讲解Node.js核心概念和开发技巧。",
        averageRating: 4.6,
        coverImage: "",
        tagId: [5, 8]
    },
    {
        id: 5,
        title: "CSS权威指南",
        author: "Eric A. Meyer",
        isbn: "9787115279460",
        pageCount: 648,
        publisher: "中国电力出版社",
        publishDate: "2019-06-01",
        readCount: 9800,
        ratingCount: 2567,
        commentCount: 589,
        description: "CSS领域权威著作，全面讲解CSS3最新特性。",
        averageRating: 4.4,
        coverImage: "",
        tagId: [9, 10]
    },
    {
        id: 6,
        title: "Python编程：从入门到实践",
        author: "Eric Matthes",
        isbn: "9787115428028",
        pageCount: 459,
        publisher: "人民邮电出版社",
        publishDate: "2016-07-01",
        readCount: 21500,
        ratingCount: 4872,
        commentCount: 1256,
        description: "零基础学习Python的经典教程，包含大量实践项目。",
        averageRating: 4.8,
        coverImage: "",
        tagId: [3, 12]
    },
    {
        id: 7,
        title: "算法导论",
        author: "Thomas H. Cormen",
        isbn: "9787115221704",
        pageCount: 780,
        publisher: "机械工业出版社",
        publishDate: "2013-01-01",
        readCount: 18200,
        ratingCount: 3987,
        commentCount: 876,
        description: "算法领域的经典教材，涵盖所有重要算法与数据结构。",
        averageRating: 4.9,
        coverImage: "",
        tagId: [4, 13]
    },
    {
        id: 8,
        title: "深入浅出设计模式",
        author: "Eric Freeman",
        isbn: "9787508344980",
        pageCount: 638,
        publisher: "中国电力出版社",
        publishDate: "2007-09-01",
        readCount: 16700,
        ratingCount: 3562,
        commentCount: 942,
        description: "通过生动案例讲解23种经典设计模式。",
        averageRating: 4.7,
        coverImage: "",
        tagId: [5, 14]
    },
    {
        id: 9,
        title: "Go语言实战",
        author: "William Kennedy",
        isbn: "9787111558422",
        pageCount: 324,
        publisher: "机械工业出版社",
        publishDate: "2016-08-01",
        readCount: 9800,
        ratingCount: 2456,
        commentCount: 587,
        description: "快速掌握Go语言核心特性的实战指南。",
        averageRating: 4.5,
        coverImage: "",
        tagId: [6, 15]
    },
    {
        id: 10,
        title: "数据库系统概念",
        author: "Abraham Silberschatz",
        isbn: "9787111612728",
        pageCount: 876,
        publisher: "机械工业出版社",
        publishDate: "2019-03-01",
        readCount: 12400,
        ratingCount: 2876,
        commentCount: 654,
        description: "数据库领域的权威教材，涵盖关系型与NoSQL数据库。",
        averageRating: 4.6,
        coverImage: "",
        tagId: [7, 16]
    },
    {
        id: 11,
        title: "前端架构设计",
        author: "Micah Godbolt",
        isbn: "9787115464170",
        pageCount: 352,
        publisher: "人民邮电出版社",
        publishDate: "2017-11-01",
        readCount: 8700,
        ratingCount: 1987,
        commentCount: 432,
        description: "从工程化角度构建可维护的前端架构。",
        averageRating: 4.4,
        coverImage: "",
        tagId: [1, 17]
    },
    {
        id: 12,
        title: "机器学习实战",
        author: "Peter Harrington",
        isbn: "9787115317957",
        pageCount: 408,
        publisher: "人民邮电出版社",
        publishDate: "2013-06-01",
        readCount: 14300,
        ratingCount: 3210,
        commentCount: 789,
        description: "通过Python实现经典机器学习算法。",
        averageRating: 4.7,
        coverImage: "",
        tagId: [8, 18]
    },
    {
        id: 13,
        title: "深入理解Java虚拟机",
        author: "周志明",
        isbn: "9787111421900",
        pageCount: 540,
        publisher: "机械工业出版社",
        publishDate: "2013-09-01",
        readCount: 25600,
        ratingCount: 5123,
        commentCount: 1567,
        description: "全面解析JVM工作原理与性能优化。",
        averageRating: 4.9,
        coverImage: "",
        tagId: [9, 19]
    },
    {
        id: 14,
        title: "黑客与画家",
        author: "Paul Graham",
        isbn: "9787121238909",
        pageCount: 280,
        publisher: "电子工业出版社",
        publishDate: "2011-04-01",
        readCount: 18700,
        ratingCount: 4321,
        commentCount: 1243,
        description: "硅谷创业教父对计算机技术与创新的思考。",
        averageRating: 4.8,
        coverImage: "",
        tagId: [10, 20]
    },
    {
        id: 15,
        title: "代码整洁之道",
        author: "Robert C. Martin",
        isbn: "9787121177407",
        pageCount: 388,
        publisher: "电子工业出版社",
        publishDate: "2012-08-01",
        readCount: 20300,
        ratingCount: 4567,
        commentCount: 1342,
        description: "编写可维护、可扩展代码的最佳实践。",
        averageRating: 4.8,
        coverImage: "",
        tagId: [11, 21]
    }
];