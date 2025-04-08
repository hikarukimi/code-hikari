import {create} from "zustand/react";
import {createJSONStorage, persist} from 'zustand/middleware'

type InterviewCurStore={
    interviewId:number|undefined,
    setInterviewId: (id:number|undefined) => void
}

export const useInterviewCurStore = create<InterviewCurStore>()( // 注意这里的空泛型调用
    persist(
        (set) => ({
            interviewId:undefined,
            setInterviewId: (id) => set({ interviewId: id }),
        }),
        {
            name: 'interviewIdStore',
            storage: createJSONStorage(() => localStorage)
        }
    )
)