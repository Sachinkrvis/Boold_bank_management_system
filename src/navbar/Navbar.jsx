import SearchlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Navbar = () => {
 
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
    
    <div className="navbar">
      <div className="wrapper">
      
        <div className="search">
        
          <input type="text" placeholder="search..." />
          <SearchlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
          
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
          <Link to="/profile">
            <img
              src="https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?"
              alt = ''
              className="avtar"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
