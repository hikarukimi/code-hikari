import React from 'react';
import {Carousel} from 'antd';
import {postList} from "../../../../dataSource/post";
import {RecommendItem} from "./RecommendItem";
import {useNavigate} from "react-router-dom";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

let recommendList = postList().slice(0, 4)

export const Recommend = (props: { className?: string }) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    const navigator=useNavigate()

    return (
        <>
            <div className={props.className}>
                <Carousel afterChange={onChange} className={"w-96 mb-6"}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                {
                    recommendList.map((item, index) => {
                        return (
                            <div onClick={() => {
                                navigator(`/postDetail/${item.id}`)
                            }}>
                                <RecommendItem key={index} rank={index + 1} title={item.title}/>
                            </div>
                        )
                    })
                }
            </div>

        </>

    );
};
