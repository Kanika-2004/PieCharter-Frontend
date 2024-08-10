import React, { useState } from 'react'
import LoginPresentation from './LoginPresentation';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Slices/AuthSlice';
const Login = () => {
    
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const [loginData,setloginData] = useState({
        email:'',
        password:''
    })

    function handleinput(e){
            const {name,value}=e.target;
            setloginData({
                ...loginData,
                [name]:value,
            })
    }
   async function handlesubmit(e){
       e.preventDefault();
       console.log(loginData)


       if(!loginData.email  || !loginData.password ) {
        toast.error("Missing values from the form")
        return;
    }
       if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
        toast.error("Invalid email address")
        return;
    }

    const apiresponse = await dispatch(login(loginData))
    console.log(apiresponse)
    if(apiresponse.payload?.data.success){
        navigate('/');
    }

}

  return (
        <LoginPresentation handleinput={handleinput} handlesubmit={handlesubmit} />
  )
}

export default Login