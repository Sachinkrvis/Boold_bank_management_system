import "./table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from "react";
import axios from "../axios";


const List = () => {
  var count=1;
  
  const [User , setUser]= useState("");

  useEffect(()=>{
    const fetchdata=async()=>{
      const data=await axios.get("/register")
      // console.log("data >>>>", data);
      setUser(data);
    };
    fetchdata();
  },[])

  
    
 
  

  const rows =[
    {
        id:32323,
        bloodgrp: 'A(+ve)',
        customer:'viru',
        date:'1 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Approved',


    },
    {
        id:32323,
        bloodgrp: 'O(+ve)',
        customer:'viru',
        date:'1 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Approved',


    },
    {
        id:32323,
        customer:'viru',
        bloodgrp: 'A(+ve)',
        date:'1 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Pending',


    },
    {
        id:32323,
        customer:'viru',
        bloodgrp: 'B(+ve)',
        date:'1 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Pending',


    },
  ]
  
  
    
  return (
     
  <div>
     {
    User && User?.data.map(
      (product)=>(
        <div className="tablecell">
        <div className="count">{count++}:{" "}</div>
        
        <div className="name"> {product.name}</div>
        <div className="user"> {product.userN}</div>
        <div className="mail"> {product.mail}</div>
        <div className="phone"> {product.phoneNo}</div>
        
         <hr></hr>
        
        </div>
      )
    )
   }
  </div>
   

    // <TableContainer component={Paper} classNme="table">
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell className="tablecell"> Tracking ID</TableCell>
    //         <TableCell className="tablecell"> Customer</TableCell>
    //         <TableCell className="tablecell"> Blood Group</TableCell>
    //         <TableCell className="tablecell"> Date</TableCell>
    //         <TableCell className="tablecell"> Amount</TableCell>
    //         <TableCell className="tablecell"> Methord</TableCell>
    //          <TableCell className="tablecell"> Status</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.id}
              
    //         >
    //           <TableCell>
    //             {row.id}
    //           </TableCell>
    //           <TableCell className="tablecell" >{row.customer}</TableCell>
    //           <TableCell className="tablecell" >{row.bloodgrp}</TableCell>
    //           <TableCell className="tablecell" >{row.date}</TableCell>
    //           <TableCell className="tablecell" >{row.amount}</TableCell>
    //           <TableCell className="tablecell" >{row.methord}</TableCell>
    //           <TableCell className="tablecell"  >
    //             <span className={`status ${row.status}`}>
    //              {row.status}
    //             </span>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  )
}

export default List
