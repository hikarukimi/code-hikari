import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Posts } from "./center/post/Posts";
import { AddPost } from "./center/post/AddPost";
import { PostDetail } from "./center/post/PostDetail";
import { Button, Col, Row } from "antd";
import { Recommend } from "./right/recommend/Recommend";
import { Rank } from "./right/rank/Rank";
import React from "react";
import { useUserStore } from "../../zustand/userStore";
import { Books } from "./center/book/Books";
import { BookDetail } from "./center/book/BookDetail";
import { Search } from "./center/serach/Search";
import { InterviewLeft } from "./left/InterviewLeft";
import { InterviewContent } from "./center/InterviewContent";
import {ROUTE_GUARD_CONFIG, ROUTES} from "../../config/routeConfig";
import {PersonInfo} from "./center/PersonInfo";

type RouteKey = keyof typeof ROUTES;

export const Article = () => {
    const navigator = useNavigate();
    const isLogin = useUserStore((user) => user.isLogin);

    const handleAddPost = () => {
        if (!isLogin) {
            alert('请先登录');
            return;
        }
        navigator(ROUTES.ADD_POST);
    };

    const renderWithAuth = (path: RouteKey, element: React.ReactNode) => {
        const routeConfig = ROUTE_GUARD_CONFIG[path];

        if (!routeConfig.requiresAuth || isLogin) {
            return element;
        }

        return <Navigate to="/" state={{ from: path }} replace />;
    };

    return (
        <article className="mt-8">
            <Row>
                <Col span={4}>
                    <Routes>
                        <Route path={ROUTES.INTERVIEW} element={<InterviewLeft />} />
                    </Routes>
                </Col>

                <Col span={12}>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.POSTS} replace />} />
                        <Route
                            path={ROUTES.POSTS}
                            element={renderWithAuth('POSTS', <Posts />)}
                        />
                        <Route
                            path={ROUTES.ADD_POST}
                            element={renderWithAuth('ADD_POST', <AddPost />)}
                        />
                        <Route
                            path={ROUTES.POST_DETAIL}
                            element={renderWithAuth('POST_DETAIL', <PostDetail />)}
                        />
                        <Route
                            path={ROUTES.BOOKS}
                            element={renderWithAuth('BOOKS', <Books />)}
                        />
                        <Route
                            path={ROUTES.BOOK_DETAIL}
                            element={renderWithAuth('BOOK_DETAIL', <BookDetail />)}
                        />
                        <Route
                            path={ROUTES.SEARCH}
                            element={renderWithAuth('SEARCH', <Search />)}
                        />
                        <Route
                            path={ROUTES.INTERVIEW}
                            element={renderWithAuth('INTERVIEW', <InterviewContent />)}
                        />
                        <Route path={ROUTES.PERSON_INFO} element={renderWithAuth('PERSON_INFO', <PersonInfo />)} />
                    </Routes>
                </Col>

                <Col span={8}>
                    <Button
                        size="large"
                        type="primary"
                        className="w-52 mb-16"
                        onClick={handleAddPost}
                    >
                        我要提问
                    </Button>
                    <Recommend className="mb-4" />
                    <Rank />
                </Col>
            </Row>
        </article>
    );
};