import Response from "../util/Response";

export type User = {
    id: number,
    avatarPath: string,
    isBanned: boolean,
    username: string,
    email: string,
    password: string,
    score: number // 新增的score属性
}

export type UserLogin = {
    username: string,
    password: string
}

// 检查用户名是否存在
export function isUsernameExist(username: string): boolean {
    return users.some(user => user.username === username);
}

// 登录功能
export function login(user: UserLogin): Response<{id: number, score: number}> {
    const foundUser = users.find(u =>
        u.username === user.username &&
        u.password === user.password
    );

    if (!foundUser) {
        return Response.error("用户名或密码错误");
    }

    if (foundUser.isBanned) {
        return Response.error("用户已被封禁");
    }

    return Response.withData({
        id: foundUser.id,
        score: foundUser.score
    });
}

// 注册功能
export function register(user: Omit<User, "id">): Response<{id: number, score: number}> {
    if (isUsernameExist(user.username)) {
        return Response.error("用户名已存在");
    }

    const newUser = {
        ...user,
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    };

    users.push(newUser);
    return Response.withData({
        id: newUser.id,
        score: newUser.score
    });
}

// 根据ID获取用户
export function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

// 更新用户分数
export function updateUserScore(id: number, score: number): Response<User> {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return Response.error("用户不存在");
    }

    users[userIndex].score = score;
    return Response.withData(users[userIndex]);
}

export function updateUserInfo(id: number,updateInfo:{username:string,email:string,oldPassword:string,newPassword:string}): Response<User> {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return Response.error("用户不存在");
    }
    if (updateInfo.newPassword) {
        users[userIndex].password = updateInfo.newPassword;
    }
    if (updateInfo.username) {
        users[userIndex].username = updateInfo.username;
    }
    if (updateInfo.email) {
        users[userIndex].email = updateInfo.email;
    }
    return Response.withData(users[userIndex]);
}


export function scoreTop(num:number){
    return users.sort((a, b) => b.score - a.score).slice(0, num);
}


// 用户数据
let users: User[] = [
    {
        "id": 1,
        "isBanned": false,
        "username": "tech_guru",
        "email": "guru@tech.io",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 85
    },
    {
        "id": 2,
        "isBanned": true,
        "username": "banned_user",
        "email": "banned@example.com",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 0
    },
    {
        "id": 3,
        "isBanned": false,
        "username": "book_lover",
        "email": "books@readers.club",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 72
    },
    {
        "id": 4,
        "isBanned": false,
        "username": "sys_admin",
        "email": "admin@system.local",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 95
    },
    {
        "id": 5,
        "isBanned": false,
        "username": "newbie123",
        "email": "newuser@mailservice.org",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 45
    },
    {
        "id": 6,
        "isBanned": false,
        "username": "hikarukimi",
        "email": "art@creative.me",
        "avatarPath": "/avatars/default.jpg",
        "password": "hikarukimi",
        "score": 88
    },
    {
        "id": 7,
        "isBanned": true,
        "username": "troublemaker",
        "email": "spam@blacklist.com",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 0
    },
    {
        "id": 8,
        "isBanned": false,
        "username": "academic_user",
        "email": "scholar@university.edu",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 91
    },
    {
        "id": 9,
        "isBanned": false,
        "username": "test_account",
        "email": "qa@testing.dev",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 60
    },
    {
        "id": 10,
        "isBanned": false,
        "username": "premium_member",
        "email": "vip@service.com",
        "avatarPath": "/avatars/default.jpg",
        "password": "123456",
        "score": 100
    }
];