import React, { useState } from 'react'
import '../css/Signup.css'

const Signup = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


  const HandelSignup =(e)=>{
    e.preventDefault();
    if(password!==confirmpassword){
      alert("Password and Confirm Password should be same");
    }
    else{

      console.log( "name",name ,"number" ,number, "email",email , "password" ,password);
    }
   
    
  }

  return (
    <div>
      
      <h1>Signup</h1>
      <form onSubmit={HandelSignup} className='form'>
        <label>Enter your name:</label><br />
        <input type="text"  
        placeholder='Enter The Name' 
        value={name}
        onChange={(e) => setname(e.target.value)} required />
        <br />
        <label>Enter your number:</label><br />
        <input type="number"
        placeholder='Enter The Number'
        value={number}
        onChange={(e) => setnumber(e.target.value)} required />
        <br />
        <label>Enter your email:</label><br />
        <input type="email"
        placeholder='Enter The Email'
        value={email}
        onChange={(e) => setemail(e.target.value)} required />
        <br />
        <label>Enter your password:</label><br />
        <input type="password"
        placeholder='Enter The Password'
        value={password}
        onChange={(e) => setpassword(e.target.value)} required />
        <br />
        <label>Confirm your password:</label><br />
        <input type="password"
        placeholder='Confirm The Password'
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)} required />
        <br />
        <button className='dr' type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup