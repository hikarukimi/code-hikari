export default class Response<T>{
    code:number
    message:string
    data:T
    constructor(code:number,message:string,data:any){
        this.code=code
        this.message=message
        this.data=data
    }
    static success (message:string):Response<any>{
        return new Response(200,message?message:'success',null)
    }
    static error (message:string):Response<any>{
        return new Response(400,message?message:'error',null)
    }
    static withData(data:any,message?:string):Response<any>{
        return new Response(200,message?message:'success',data)
    }

}