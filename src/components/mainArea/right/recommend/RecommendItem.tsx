export const RecommendItem = (props:{
    rank:number,
    title:string,
}) => {
    return (
        <>
            <div className={"flex "}>
                <div className={"bg-blue-400 mr-3 rounded-lg text-white w-6 h-6 text-center"}>
                    {props.rank}
                </div>
                <p className={"font-bold"}>{props.title}</p>
            </div>
            <hr className={"w-full my-2"}/>
        </>
    );
};