import axios from "axios"
import { baseUrl } from "./Url"

export const PostUser=async(formdata)=>{
try{
    const PostnewUser=await axios.post(`${baseUrl}`,formdata)
    return PostnewUser
}catch(err){
return err
}
}
export const GetallUser=async()=>{
try{
    const GetUsers=await axios.get(`${baseUrl}`)
    return GetUsers
}catch(err){
return err
}
}


