import React, { useState } from 'react'
import SignupPresentation from './SignupPresentation';
import  toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { createAccount } from '../../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    console.log(import.meta.env)
    const navigate= useNavigate()
    const dispatch=useDispatch()
    const [signupstate,setsignupstate]= useState({
        firstName:'',
        email:'',
        mobilenumber:'',
        password:''
    })
    function handleinput(e){
        const {name,value}=e.target;
        setsignupstate({
            ...signupstate,
            [name]:value
        })
    }
    async function handlesubmit(e){
        e.preventDefault();
        console.log(signupstate)


        if(!signupstate.email || !signupstate.mobilenumber || !signupstate.password || !signupstate.firstName) {
            toast.error("Missing values from the form")
            return;
        }

        if(signupstate.mobilenumber.length<10) {
            toast.error("Mobile number should be atleast 10 character long")
               return 
        }
        if(signupstate.firstName.length<5) {
            toast.error("First Name should be atleast 5 character long")
               return 
        }
        
        if(!signupstate.email.includes('@') || !signupstate.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }
            
        const apiresponse= await dispatch(createAccount(signupstate));
            if(apiresponse.payload.data.success){
                navigate('/auth/login');
            }

        console.log(apiresponse)
    }

   

  return (
    <   SignupPresentation
        handleinput={handleinput}
        handlesubmit={handlesubmit}
     />
  )
}

export default Signup