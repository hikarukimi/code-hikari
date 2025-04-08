import {create} from "zustand/react";
import {createJSONStorage, persist} from 'zustand/middleware'

type UserStore={
    isLogin:boolean,
    userId:number|undefined,
    setLogin:(login:boolean)=>void,
    setUserId:(id:number|undefined)=>void
}

//TODO:理解这里的双重调用语法，太尼玛恶心了
export const useUserStore = create<UserStore>()( // 注意这里的空泛型调用
    persist(
        (set) => ({
            isLogin:false,
            userId:undefined,
            setLogin: (login) => set({ isLogin: login }),
            setUserId: (id:number|undefined) => set({ userId: id }),
        }),
        {
            name: 'userStore',
            storage: createJSONStorage(() => localStorage)
        }
    )
)