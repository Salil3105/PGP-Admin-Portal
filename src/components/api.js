import axios from 'axios'
import React from 'react'
// import 
export default class personList extends React.Component
{
    state = {
        
            userEmailId:'mvshinde640@gmail.com',
            password: "newPassword"
        
    }
    handelSubmit = event =>{
        event.preventDefault();
        const user = {
            userEmailId:this.state.userEmailId,
            password:this.state.password
        }
        axios.post(`http://localhost:3000/api/v1/auth/login`,{user}).then(res =>{
            console.log(res)
            this.setState({data: res.data})
        })
    }
}