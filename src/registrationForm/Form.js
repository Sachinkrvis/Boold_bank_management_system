import React,{useState} from "react";
import '../registrationForm/registerform.css'
import axios from "../axios"

const Form =()=>{
 
    const[name,setName]= useState("");
    const[userN,setUserN]= useState("");
    const[mail,setMail]= useState("");
    const[phoneNo,setPhoneNo]= useState("");
    const[pass,setPass]= useState("");
    const[confpass,setConfpass]=useState("");
    const[genderS,setgenderS]= useState("");

    
    const addUser=(e)=>{
      e.preventDefault();
       
      axios.post("/register",{name,userN,mail,phoneNo,pass,confpass,genderS})
      .then(()=>{
         setName("");
         setUserN("");
         setMail("");
         setPhoneNo("");
         setPass("");
         setConfpass("");
         setgenderS("");
      })
      .catch((error)=>alert(error.message));
    }

    return(
        
        <div class="container1">
        <div class="title">Registration Form</div>
        <div class="content">
          <form action="/student" method="post"> 
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} value={name} />
              </div>
              <div class="input-box">
                <span class="details">Blood group</span>
                <input type="text" placeholder="Enter your username"  onChange={(e)=>setUserN(e.target.value)} value={userN} />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email"  onChange={(e)=>setMail(e.target.value)} value={mail}/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" minlength="10" maxlength="10" placeholder="Enter your number" onChange={(e)=>setPhoneNo(e.target.value)} value={phoneNo} />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password"  onChange={(e)=>setPass(e.target.value)} value={pass} />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password"  onChange={(e)=>setConfpass(e.target.value)} value={confpass}/>
              </div>
            </div>
            <div class="gender-details">
              <input type="radio"  id="dot-1" onChange={(e)=>setgenderS(e.target.value)} value={genderS}/>
              <input type="radio"  id="dot-2"  onChange={(e)=>setgenderS(e.target.value)} value={genderS}/>
              <input type="radio"  id="dot-3"  onChange={(e)=>setgenderS(e.target.value)} value={genderS}/>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register" onClick={addUser}/>
            </div>
          </form>
        </div>
      </div>

    )
}
export default Form