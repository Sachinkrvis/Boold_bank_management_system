import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Login from 'login/Login';
import List from 'list/List';
import New from 'newUser/New';
import Chart from 'chart/Chart';
import { Route ,Routes } from 'react-router-dom';
import Single from 'single/Single';
import Form from 'registrationForm/Form'
import Welcome from 'welcome/Welcome';
import Home from 'home/Home';
import { Rule } from '@mui/icons-material';
import Table from './table/Table'
import Donor from 'donor/Donor';




function App() {
  return (
    // <Table></Table>
   <Routes>
   <Route path='/' element={<Welcome></Welcome>}/>
     <Route path='/getstarted' element={<Login></Login>}/>
     <Route path='/afterlog'  element={<Home></Home>}/>
    
     
     <Route path='/home' element={<Home></Home>}/>
     
     <Route path='/newUser' element={<New></New>}></Route>
     <Route path='/profile' element={<Single></Single>}></Route>
     <Route path='/register' element={<Form></Form>}></Route>
     <Route path='/donor' element={<Donor></Donor>}></Route>
   </Routes>
  );
}

export default App;
