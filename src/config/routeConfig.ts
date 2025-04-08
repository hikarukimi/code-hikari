

// 集中管理路由路径
export const ROUTES = {
    POSTS: "/posts",
    ADD_POST: "/addPost",
    POST_DETAIL: "/postDetail/:postId",
    BOOKS: "/books",
    BOOK_DETAIL: "/bookDetail/:bookId",
    SEARCH: "/search",
    INTERVIEW: "/interview",
    PERSON_INFO: "/personInfo",
    HOME: "/"
} as const;

interface RouteGuardConfig{
    path: string;
    requiresAuth: boolean;
    requiredRoles?: string[]; // 可选角色权限
}

export const ROUTE_GUARD_CONFIG: Record<string, RouteGuardConfig> = {
    POSTS: {
        path: ROUTES.POSTS,
        requiresAuth: false // 帖子列表页通常公开
    },
    ADD_POST: {
        path: ROUTES.ADD_POST,
        requiresAuth: true, // 添加帖子需要登录
    },
    POST_DETAIL: {
        path: ROUTES.POST_DETAIL,
        requiresAuth: false // 帖子详情页公开
    },
    BOOKS: {
        path: ROUTES.BOOKS,
        requiresAuth: false // 书籍列表页公开
    },
    BOOK_DETAIL: {
        path: ROUTES.BOOK_DETAIL,
        requiresAuth: false // 书籍详情无要登录
    },
    SEARCH: {
        path: ROUTES.SEARCH,
        requiresAuth: false // 搜索页公开
    },
    INTERVIEW: {
        path: ROUTES.INTERVIEW,
        requiresAuth: true, // 面试题需要登录
    },
    PERSON_INFO: {
        path: ROUTES.PERSON_INFO,
        requiresAuth: true, // 个人信息需要登录
    },
    HOME: {
        path: ROUTES.HOME,
        requiresAuth: false // 首页公开
    }
}