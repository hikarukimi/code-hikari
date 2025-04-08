import {RankItem} from "./RankItem";
import {scoreTop} from "../../../../dataSource/user";

export const Rank = () => {
    let rankList=scoreTop(10)
    return (
        <>
            <p className={"font-bold mb-4"}>Rank</p>
            {
                rankList.map((item,index)=>{
                    return (
                        <RankItem key={index} rank={index+1} username={item.username} score={item.score}/>
                    )
                })
            }
        </>
    );
};