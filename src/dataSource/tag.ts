export interface TagType{
    id:number,
    name:string,
    color:string,
    description:string
}

export function getTags():TagType[]{
    return tags
}

export function getTag(id:number):TagType{
    for(let i=0;i<tags.length;i++){
        if(tags[i].id===id){
            return tags[i]
        }
    }
    return tags[0]
}


let tags=[
           {
             "id": 1,
             "name": "前端开发",
             "color": "#3498db",
             "description": "HTML/CSS/JavaScript相关技术"
           },
           {
             "id": 2,
             "name": "后端开发",
             "color": "#2ecc71",
             "description": "服务器/数据库/API开发"
           },
           {
             "id": 3,
             "name": "算法",
             "color": "#e74c3c",
             "description": "数据结构与算法题解"
           },
           {
             "id": 6,
             "name": "开源贡献",
             "color": "#f39c12",
             "description": "GitHub开源项目协作"
           },
           {
             "id": 7,
             "name": "全栈",
             "color": "#9b59b6",
             "description": "前后端通吃的开发者"
           },
           {
             "id": 9,
             "name": "摸鱼",
             "color": "#e67e22",
             "description": "合理的工作休息技巧"
           },
           {
             "id": 10,
             "name": "面试题",
             "color": "#d35400",
             "description": "大厂高频面试题库"
           }, {
            "id": 11,
            "name": "全部",
            "color": "#d35400",
            "description": "大厂高频面试题库"
           },
         ]