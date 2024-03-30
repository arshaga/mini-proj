import React, { useEffect, useState } from "react";
import { userUserServices } from "../../services/userService";

export const Home =(props)=>{
    const {submit,params} = props

    const [newdata,setNewdata]=useState([])
    const [userList,setUserList]=useState([])
    const{getUserList,putUserList}= userUserServices()

    useEffect(()=>{
        let tempList = userList
        if(params != 'all'&& params){
            tempList =userList.filter(data=>{
            return data.status == params;
            });
        }
        setNewdata(tempList)
    },[params,userList])
    


    useEffect(()=>{
        getData();
    },[submit]);

   

    
    const getData = async ()=>{
        try{
        
            const response = await  getUserList()
            if(response.success)
            setUserList(response.data)
            console.log(response.data)

        }catch(err){

        }
    }


    return(
            <div className="table-container">
                    <h2>Profile</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="500">Username</th>
                            <th width="500">Email</th>
                            <th width="500">Address</th>
                        </tr>

                    </thead>
                     <tbody>
                    {newdata?.length>0 ?

                    newdata.map((data, index) => (
                <tr key={index}>
                
                <td> <div>{data.username}</div></td>

                <td><div>{data.email}</div></td>
                </tr>
            ))
            :<tr><td colSpan={5} className="fs-5 text-center">
            <div className="td-data">No User Found</div></td></tr>
            }

                    </tbody> 
                    
            
                </table>
            </div>
        )
    }