import {prisma} from "../../../../generated/prisma-client"
export default{
    Query:{
        UserById:async(__,{id})=>{
            console.log(id);
            return await prisma.user({id});
        }
    }
}