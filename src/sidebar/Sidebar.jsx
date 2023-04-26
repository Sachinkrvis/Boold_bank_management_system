import "../sidebar/sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, Outlet} from "react-router-dom";
import Login from "login/Login";

const Sidebar = () => {
  return (
    
    <div className="sidebar">
    <Link to="/adminportal">
      <div className="top" >
      <span className="logo" >Admin portal</span>
     </div>
     </Link>
     <hr></hr>
     
     <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/home">
            <li>
                <DashboardIcon className="icon"/>
                <span>Home</span>
            </li>
            </Link>
            <p className="title">LIST</p>
            <Link to="/donor">
            <li>
            
            <PeopleOutlineIcon className ="icon"/>
            <span>Donors</span>
            </li>
            </Link>

            <li>
            <PeopleIcon className ="icon"/>
            <span>Acceptor</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
          <NotificationsActiveIcon className ="icon"/>
            <span>Notifications</span>
        </li>
        <li>
             <LeaderboardIcon className ="icon"/>
            <span>Stats</span>
        </li>
        <li>
          <PsychologyIcon className="icon"/>
            <span>Logs</span>
        </li>
        <li>
          <SettingsIcon className="icon"/>
            <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <Link to="/profile">
          <li>
          <AccountCircleIcon className="icon"/>
          <span>Profile</span>
          </li>
        </Link>

        <li>
                       <LogoutIcon className="icon"/>
                   <span>Logout</span>
        </li>


        </ul>
     </div>
     {/* <div className="bottom"></div> */}


    </div>
    
    
    
  );
}

export default Sidebar;
