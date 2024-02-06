import React, { useEffect, useState } from 'react'
import './Register.css'
import logo from '../images/logo.jpg'

const Register = () => {

  const [field,setField]=useState({
    firstName:"",
    repeatpass:"",
    email:"",
    phoneNumber:"",
    password:""

  })

  const [submitted,setSubmit]=useState(false);
  const [validate,setValidate]=useState(false);
  const [redirect,setRedirect]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmit(true)


    if(field.firstName!="" && 
    field.phoneNumber!="" && 
    field.phoneNumber.length==10 && 
    field.email!="" && 
    field.email.includes("@")==true && 
    field.repeatpass!="" && 
    field.password!="" && 
    field.password.includes("@")==true){
      setValidate(true);

      setTimeout(()=>{
        setValidate(false);
        setSubmit(false);
        setRedirect(true);
      },1000);

    }

    
  }

  useEffect(()=>{
    if (redirect){
      window.location.replace('./Fetch.jsx')
    }
  },[redirect]);


  return (
    <>
        <img id="img"src={logo} alt="" />
       
        <form action='' onSubmit={handleSubmit}>
          <div className='box'>
            <div>
              {validate==true?<h3>Registration Successfull !!</h3>:""}
            </div>
            <input
              id='first-name' value={field.firstName} type="text" placeholder='Enter Your Name' onChange={(e)=>setField({...field,firstName:e.target.value})}
            />
            {submitted==true && field.firstName==""?<p>Enter your First Name</p>:null}

            <input 
              id='phone-no' value={field.phoneNumber} type="text" placeholder='Enter Your phone number' onChange={(e)=>setField({...field,phoneNumber:e.target.value})}
            />
            {submitted==true && field.phoneNumber==""?<p>Enter your Phone Number</p>:null}
        
            {submitted==true && field.phoneNumber.length!=10 && field.phoneNumber!=""?<p>Enter your 10 digit number</p>:null}

            <input
              id='e-mail' value={field.email} type="text" placeholder='Enter Your Email' onChange={(e)=>setField({...field,email:e.target.value})}
            />
            {submitted==true && field.email==""?<p>Enter your E-Mail</p>:null}
        
            {submitted==true && field.email.includes("@")==false && field.email!=""?<p>Enter correct E-Mail</p>:null}

            <input 
              id='password ' value={field.password} type="password" placeholder='Enter Your Password' onChange={(e)=>setField({...field,password:e.target.value})}
            />
            {submitted==true && field.password==""?<p>Enter Password</p>:null}

            {submitted==true && field.password.length!=5 && field.password.includes("@")==false && field.password!=""?<p>Enter correct password or Add "@"</p>:null}

            <input 
              id='repeat-pass' value={field.lastName} type="password" placeholder='Repeat your password' onChange={(e)=>setField({...field,repeatpass:e.target.value})}
            />
            {submitted==true && field.repeatpass==""?<p>Repeat your Password</p>:null}
            
            {submitted==true && field.repeatpass!=field.password?<p>Password dont match</p>:null}
            
            <button type='submit'>Register</button>
                

          </div>

        </form>
    </>
  )
}

export default Register