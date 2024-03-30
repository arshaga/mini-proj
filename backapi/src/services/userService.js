import axiosPrivate from "../url/userAxios";

 export const userUserServices =()=>{
     
    const registerUser =async(data)=>{
        const response = await axiosPrivate
        .post('/reg',data)
        return response.data
    }
    const loginUser = async(data) =>{
        const response = await axiosPrivate
        .post('/login',data)
        return response.data
    }
    const getUserList = async (data)=>{
        const response = await axiosPrivate
        .get('/getuser',data)
        return response.data

    }
return{
    registerUser,
    loginUser,
    getUserList
  
}
 }