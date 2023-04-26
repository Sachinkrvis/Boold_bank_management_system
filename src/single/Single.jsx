import "./single.css"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import Chart from "../chart/Chart"
import List from "../table/Table"
import { useEffect, useState } from "react"
import axios from "axios"

const Single = () => {
   
  const [singleData,setsingleData]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/app/signup")
    .then(response=>{
      setsingleData(response.singleData);
    })
    .catch(error =>{
      console.log(error);
    });
  },[]);


  return (
    <div className="single">
    <Sidebar/>
    <div className="singlecontainer">
      <Navbar/>
        {/* left side  user profile */}
        <div className="left">
          <form>
            <ul>
            <li className="image">
            <img src="https://pbs.twimg.com/media/FVZoSUgX0AASGFy.jpg:large" alt="image" />
            </li>
              <li className="username">
                <h2>Mr. claw</h2>
              </li>
              <li>
                <h4>ABES Engineering College Ghaziabad Uttar pradesh</h4>
              </li>
            </ul>
            <div>
            <button>Edit</button>
          </div>
          </form>
          </div>
          
          {/* rightside user full information */}
          <div className="rightInfo">
          <form >
            <ul className="rightInfo1">
              <li >
              
                 <h2>Full Name:</h2><h3>Sachin Vishwakarma</h3> 
              </li>
              <hr></hr>
              
              <li>
                <h2>Age:</h2><h3>22</h3>
              </li>
              <hr></hr>
              <li>
                <h2>Contact No: </h2><h3>1234567890</h3>
              </li>
              <hr></hr>
              <li>
                <h2>Address: </h2><h3>Kahinahi nagar registan ke bhicho bheech</h3>
              </li>

            </ul>
          </form>
           </div>
           <br></br>
           <br></br>
          {/* <span className="recentdata" >Recent data</span> */}
          <br></br>
          <br></br>
          {/* <div className="list1">
          <List></List></div> */}
          
        </div>
      
    
    </div>
    
  
  )
}

export default Single;
        