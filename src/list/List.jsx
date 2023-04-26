// import Datatable from "../../Datatable/Datatable"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import "./list.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/app/signup')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    // <div>
    //    {data.map(item => (
    //     <div key={item.id}>
        
    //    <h2>{item.firstname}</h2>
    //       {/* <h2>{item.firstname}</h2> */}
    //       <p>{item.username}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="list">
      <Sidebar/>
      <div className="listcontainer">
        <Navbar/>
        
        
       
     
      </div>
    </div>
  )
}

export default List
