import Sidebar from "sidebar/Sidebar"
import Navbar from "navbar/Navbar"
import Table from "table/Table"
import '../donor/donor.css'

const Donor=()=>{
    return(
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
          {/* <div className="charts">
            <Featured/>
          <Chart aspect={2/1} title= "Revenue (Last Six Month)"/>
          </div> */}
          {/* <div>
          <PieChart width={200} height={200}>
          <Pie data={data} dataKey="students" outerRadius={100} fill="red" />
         
          </PieChart>
          </div> */}
          <div className="listcontainer">
            <div className="listtitle">
              Recent New User
            </div>
            <Table/>
          </div>
        </div>
    </div>
    )
}
export default Donor;