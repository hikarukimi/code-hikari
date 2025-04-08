import {Avatar, Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";

export const RankItem = (props: {
    rank: number,
    username: string,
    score: number

}) => {
    return (
        <>
            <Row>
                <Col span={4}>
                    {
                        props.rank === 1 ? (
                            <img src={"/冠军奖杯.svg"} className={"w-6"} alt={"冠军"} ></img>
                        ) : props.rank === 2 ? (
                            <img src={"/亚军.svg"} className={"w-5"} alt={"亚军"}></img>
                        ) : props.rank === 3 ? (
                            <img src={"/季军.svg"} className={"w-4"} alt={"季军"}></img>
                        ) : (
                            <b>{props.rank}</b>
                        )
                    }
                </Col>
                <Col span={4}>
                    <Avatar size={"small"} icon={<UserOutlined />}/>
                </Col>
                <Col span={8}>
                    <p>{props.username}</p>
                </Col>
                <Col span={8}>
                    <p>{props.score}</p>
                </Col>
            </Row>

        </>
    );
};