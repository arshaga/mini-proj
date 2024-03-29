import React, { useEffect, useState } from "react";
import { userUserServices } from "../../services/userService";

export const Home =(props)=>{
    const {submit} = props

    const [newdata,setNewdata]=useState()
    const{getUserList,putUserList}= userUserServices()



    useEffect(()=>{
        getdata()
    },[submit])
    
    const getdata = async ()=>{
        try{
            const response = await  getUserList()
            if(response.success)
            setNewdata(response.data)

        }catch(err){

        }
    }



    return(
        <div className="table-container">
            <div className="table-list">
                <h2>Profile</h2>
                <thead>
                    <tr>
                        <th width="500">Username</th>
                        <th width="500">Email</th>
                        <th width="500">Address</th>
                    </tr>

                </thead>
                <tbody>
                {newdata.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}

                </tbody>
            </div>
        </div>
    )
}