import {NavLink, useNavigate} from "react-router-dom";
import { Image, Select, Space } from "antd";
import Search from "antd/es/input/Search";
import { LoginAvatar } from "./LoginAvatar";
import {useState} from "react";

// 类型定义
type NavItem = {
    path: string;
    label: string;
};

type SearchOption = {
    value: string;
    label: string;
};

// 常量配置
const NAV_ITEMS: NavItem[] = [
    { path: "/", label: "问答" },
    { path: "/books", label: "书籍" },
    { path: "/interview", label: "面试题" },
    { path: "/tutorials", label: "视频教程" },
];

const SEARCH_OPTIONS: SearchOption[] = [
    { value: "post", label: "帖子" },
    { value: "book", label: "书籍" },
];

export const Header = () => {

    const navigator=useNavigate()
    const [searchContent,setSearchContent]=useState("")
    const [searchType,setSearchType]=useState(SEARCH_OPTIONS[0].value)

    const onSearch=()=>{
        navigator(`/search?type=${searchType}&content=${searchContent}`)
    }

    return (
        <header className="h-28 bg-slate-900 text-white flex justify-evenly items-center px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Image
                    src="/codeHikariLogo.png"
                    preview={false}
                    alt="CodeHikari Logo"
                    width={300}
                />
            </div>

            {/* 主导航 */}
            <nav className="flex gap-8">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `text-white hover:text-blue-300 transition-colors duration-200 ${
                                isActive ? "text-blue-400 font-medium" : ""
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            {/* 搜索区域 */}
            <Space.Compact className="flex-grow max-w-2xl mx-4">
                <Select
                    defaultValue={SEARCH_OPTIONS[0].value}
                    value={searchType}
                    onSelect={(value) => {
                        setSearchType(value)
                        setSearchContent("")
                    }}
                    options={SEARCH_OPTIONS}
                    size="large"
                    className="w-32"

                />
                <Search
                    placeholder="我が行くは星の海"
                    enterButton="搜索"
                    size="large"
                    className="flex-grow"
                    value={searchContent}
                    onSearch={onSearch}
                    onChange={(e)=>{setSearchContent(e.target.value)}}
                />
            </Space.Compact>
            {/* 用户头像 */}
            <div className="flex-shrink-0 ml-4">
                <LoginAvatar />
            </div>
        </header>
    );
};