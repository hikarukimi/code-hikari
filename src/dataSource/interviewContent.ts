
export function getInterviewContentById(id:number){
    return interviewContent.filter(item=>item.interviewCategoryId===id)
}

const interviewContent=[
    {
        "id": 2001,
        "interviewCategoryId": 201,
        "content": "## 解释Event Loop机制\n\n**问题**：请描述JavaScript中的Event Loop运行原理，包括调用栈、任务队列和微任务队列的交互过程。\n\n**参考答案**：\n```javascript\n// 示例代码\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// 输出顺序：1 -> 4 -> 3 -> 2\n```\n- 同步代码优先执行\n- 微任务（Promise）优先于宏任务（setTimeout）\n- 详细流程图见附件"
    },
    {
        "id": 2002,
        "interviewCategoryId": 202,
        "content": "## 实现防抖函数\n\n**要求**：\n1. 用TypeScript实现防抖函数`debounce(fn, delay)`\n2. 说明适用场景（如窗口resize事件）\n\n**参考答案**：\n```typescript\nfunction debounce<T extends (...args: any[]) => any>(\n  fn: T, \n  delay: number\n): (...args: Parameters<T>) => void {\n  let timer: NodeJS.Timeout;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n```"
    },
    {
        "id": 1001,
        "interviewCategoryId": 1001,
        "content": "## String的不可变性\n\n**问题**：为什么Java中的String被设计为不可变类？\n\n**考点**：\n- 线程安全性\n- 字符串常量池优化\n- HashCode缓存特性\n\n**示例**：\n```java\nString a = \"hello\";\nString b = a.replace('h', 'H');\nSystem.out.println(a); // 仍输出 \"hello\"\n```"
    },
    {
        "id": 1002,
        "interviewCategoryId": 101,
        "content": "## HashMap扩容机制\n\n**问题**：\n1. Java HashMap何时触发扩容？\n2. 为什么容量总是2的幂次方？\n\n**答案要点**：\n- 默认负载因子0.75\n- 扩容时rehash的位运算优化\n- 代码示例：\n```java\n// HashMap的hash方法\nstatic final int hash(Object key) {\n  int h;\n  return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);\n}\n```"
    },
    {
        "id": 1003,
        "interviewCategoryId": 102,
        "content": "## 垃圾回收算法对比\n\n**对比G1和CMS**：\n| 特性       | G1                          | CMS                     |\n|------------|-----------------------------|-------------------------|\n| 算法类型   | 标记-整理                   | 标记-清除               |\n| 停顿预测   | 支持                        | 不支持                  |\n| 内存碎片   | 较少                        | 较多                    |\n\n**JVM参数示例**：\n```bash\n# G1配置示例\n-XX:+UseG1GC -XX:MaxGCPauseMillis=200\n```"
    }
]