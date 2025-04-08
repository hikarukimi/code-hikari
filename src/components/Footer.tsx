import { Layout, Divider, Typography, Input, Button, Space, Flex } from 'antd';
import {
    TwitterOutlined,
    GithubOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    LinkOutlined
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text, Link, Title } = Typography;

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AntFooter className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="mx-auto px-4">
                {/* 主内容区 - 使用 Flex 布局 */}
                <Flex
                    justify="space-between"
                    wrap="wrap"
                    gap={24}
                    className="mb-8"
                >
                    {/* 关于我们 */}
                    <div style={{ flex: '1 1 200px' }}>
                        <Title level={5} className="mb-4">关于我们</Title>
                        <Text type="secondary">
                            我们致力于提供优质的技术内容和资源分享
                        </Text>
                        <Space className="mt-4">
                            <Button
                                type="text"
                                icon={<TwitterOutlined />}
                                href="#"
                                target="_blank"
                            />
                            <Button
                                type="text"
                                icon={<GithubOutlined />}
                                href="#"
                                target="_blank"
                            />
                        </Space>
                    </div>

                    {/* 快速链接 */}
                    <div style={{ flex: '1 1 200px' }}>
                        <Title level={5} className="mb-4">快速链接</Title>
                        <Space direction="vertical">
                            <Link href="#" className="block">
                                <LinkOutlined /> 关于我们
                            </Link>
                            <Link href="#">
                                <LinkOutlined /> 服务
                            </Link>
                            <Link href="#">
                                <LinkOutlined /> 博客
                            </Link>
                            <Link href="#">
                                <LinkOutlined /> 联系我们
                            </Link>
                        </Space>
                    </div>

                    {/* 联系方式 */}
                    <div style={{ flex: '1 1 200px' }}>
                        <Title level={5} className="mb-4">联系我们</Title>
                        <Space direction="vertical">
                            <Text>
                                <MailOutlined /> contact@example.com
                            </Text>
                            <Text>
                                <PhoneOutlined /> +86 123-4567-8910
                            </Text>
                            <Text>
                                <EnvironmentOutlined /> 北京市海淀区科技园
                            </Text>
                        </Space>
                    </div>

                    {/* 订阅 */}
                    <div style={{ flex: '1 1 300px' }}>
                        <Title level={5} className="mb-4">订阅更新</Title>
                        <Space.Compact style={{ width: '100%' }}>
                            <Input placeholder="您的邮箱地址" />
                            <Button type="primary">订阅</Button>
                        </Space.Compact>
                    </div>
                </Flex>

                <Divider className="my-6" />

                {/* 版权信息 - 使用 Flex 布局 */}
                <Flex
                    justify="space-between"
                    align="center"
                    wrap="wrap"
                    gap={16}
                >
                    <Text type="secondary">
                        © {currentYear} 网站名称. 保留所有权利
                    </Text>
                    <Space>
                        <Link href="#">隐私政策</Link>
                        <Divider type="vertical" />
                        <Link href="#">服务条款</Link>
                    </Space>
                </Flex>
            </div>
        </AntFooter>
    );
};