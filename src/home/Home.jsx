import Sidebar from "../sidebar/Sidebar"
import "../home/home.css"; 
import Navbar from "../navbar/Navbar";
// import Widget from "../../widget/Widget";
import Chart from "../chart/Chart";
// import Featured from "../../featured/Featured";
import Tables from "../table/Table";
import { PieChart, Pie} from 'recharts';



const Home = () => {
  
  return (
    <div className="home">
        <Sidebar/>
        <div className="homecontainer">
          <Navbar/>
          {/* <div className="widgets">
          <Widget type ="user"/>
          <Widget type ="order"/>
          <Widget type ="earning"/>
          <Widget type ="balance"/>
          </div> */}
          <div className="charts">
            {/* <Featured/> */}
          <Chart aspect={2/1} title= "Revenue (Last Six Month)"/>
          </div>
          {/* <div>
          <PieChart width={200} height={200}>
          <Pie data={data} dataKey="students" outerRadius={100} fill="red" />
         
          </PieChart>
          </div> */}
          <div className="listcontainer">
            <div className="listtitle">
              Recent New User
            </div>
            <Tables/>
          </div>
        </div>
    </div>
  )
}

export default Home;
