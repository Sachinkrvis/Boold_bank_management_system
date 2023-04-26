import Navbar from "navbar/Navbar"
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "sidebar/Sidebar"
import "./login.css"

const Login = () => {
  const[error,seterror] = useState(false)
  const handleLogin =(e)=>{
    e.preventDefault();
  }
  return (
    
    <div id="parent">
    
    <body >
    <form id="form_login">
        <p>
            <input  type="text" id="username" placeholder="username" />
        </p>
        <p>
            <input type="password" id="password" placeholder="password" />
        </p>
       
        <p>
        <Link to="/afterlog">
            <button id="submitbutton" type="button">Login</button>
            </Link>
            <br></br>
            <Link to='/register'>
            <button id="registerbutton" type="button">New Registration</button>
            </Link>
        </p>
    </form>
    
</body>
        {error&&  <span>Wrong password or email</span>}
    </div>
  );
}

export default Login;
