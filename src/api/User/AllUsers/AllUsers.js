import {prisma} from "../../../../generated/prisma-client"
export default{
    Query:{
        AllUsers:async()=>{
            return await prisma.users()
        }
    }
}