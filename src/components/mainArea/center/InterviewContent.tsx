import {useInterviewCurStore} from "../../../zustand/interviewCurStore";
import {getInterviewContentById} from "../../../dataSource/interviewContent";
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";

export const InterviewContent = () => {

    const interviewId=useInterviewCurStore((state)=>state.interviewId)
    const interview=getInterviewContentById(Number(interviewId))

    function getContent(){
        if(interview.length>0) {
            return (
                <div>
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{
                        interview[0].content
                    }
                    </ReactMarkdown>
                </div>

            )
        }else{
            return <div>暂无内容</div>
        }
    }

    return (
        <>
            {getContent()}
        </>
    );
};