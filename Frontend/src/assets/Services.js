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
export const UpdateMyUser=async(formdata,id)=>{
try{
    const UpdateMyUser=await axios.patch(`${baseUrl}/${id}`,formdata)
    return UpdateMyUser
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
export const DeleteUser=async(id)=>{
try{
    const DeleteUserData=await axios.delete(`${baseUrl}/${id}`)
    return DeleteUserData
}catch(err){
return err
}
}
export const GetSingleuser=async(id)=>{
try{
    const userData=await axios.get(`${baseUrl}/${id}`)
    return userData
}catch(err){
return err
}
}




