import React, {useState} from 'react'
import '../components/Login.css';
import uuid from 'react-uuid'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

function Login(){

    const [data, setData] = useState({
        userEmailId: 'mvshinde640@gmail.com',
        password: 'newPassword',
        admin: false
    })
    console.log(data);
    const textEmailChange = (email) => {
        setData({
        ...data,
        userEmailId: email.nativeEvent.data
        })
        console.log(data);
        
    }
    
    const textPassChange = (pass) => {
        setData({
        ...data,
        password: pass
        })
        console.log(data);
        
    }
    const history = useHistory()
    const check = ()=> 
    {
        console.log('Entered Inside the Check Function Succesfully');
        const id = uuid();
        console.log(id);
        history.push('/login/:'+ id);

        var config = {

            method: 'post',
            url: 'http://localhost:3000/api/v1/auth/login',
            headers: { },
            data : data
        };
        
        axios(config)
        .then(function (response) {

            console.log(JSON.stringify(response.data));
            if(response.data.success){
                console.log('request successful');
                
            }
        })

        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className='info'>
            <h1>Login Page</h1>
            <div className='col-sm-6 offset-sm-3'>
                <label><input type='email' placeholder='Email Id' onChange={(email)=>textEmailChange(email)} className='form-control' /></label> <br />
                <label><input type='password' placeholder='Password' onChange={(pass)=>textPassChange(pass)} className='form-control' /></label> <br />
                <button  className='btn btn-primary' onClick={check}>Log in</button>
            </div>
        </div>
    )
    
}

export default Login;





// import React, {useState} from 'react'
// import uuid from 'react-uuid'
// import {useHistory} from 'react-router-dom';

// function LoginForm({Login , error}) {

//     const history = useHistory()
//         const submitHandler = e => 
//         {
//             const id = uuid();
//             console.log(id);
//             history.push('/login/:'+ id);

//             e.preventDefault();
//             Login(details);
            
//         }

//     const [details,setDetails]= useState({ email:'', password:''})
//     return (
//         <form onSubmit={submitHandler}>
//             <div className='form-inner'>
//                 <h2>Login</h2>
//                 <div className='form-group'>
//                     <label htmlFor='name'>Email :</label>
//                     <input type='email' name='email' id='email'></input>
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='name'>Password :</label>
//                     <input type='password' name='password' id='password'></input>
//                 </div>
//                 <input type='submit' value='LOGIN' />
//             </div>

//         </form>
//     )
// }

// export default LoginForm ;
