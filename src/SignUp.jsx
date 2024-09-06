import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import {Link} from 'react-router-dom'
import './App.css'
import './SignUp.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase'
import { useNavigate } from "react-router-dom";



const Signup = (props)=>{
    const navigate = useNavigate();
        const [contact, setContact] = useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        })
       
    

    const {displayName, email, password, confirmPassword} = contact;
    console.log(contact);

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, {displayName});
            navigate("/login"); // Redirect to login page
        }
        catch (error){
            console.log('error in creating user ', error.message);
        }
    }


 
    return <div className= 'header-div'>

      <Input 
       name= 'displayName'
       type= 'text'
       placeholder ='name'
       onChange = {handleChange}
       value = {contact.displayName}
       />      

      <br></br>

       <Input 
       name= 'email'
       type= 'email'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

        <br></br>

       <Input 
       name='confirmPassword'
       type= 'password'
       placeholder ='confirm password'
       onChange = {handleChange}
       value = {contact.confirmPassword}
       />

       <br></br>

       <button onClick={handleSubmit}>
        Sign Up
       </button>

        <br></br>
        <br></br>

        <Link to ='/login'>
        Log in instead
        </Link>

    </div>

}
export default Signup