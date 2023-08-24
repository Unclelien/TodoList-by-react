import Dolist from "./componants/Dolist";
import Create from "./componants/Create";
import Morebutton from "./componants/Morebutton";
import './index.css'
import { useState } from "react";

function Home() {
  const [data,setData] = useState([]);

  return (
    <div className="container">
      <div className="titletext">
      <h1 className="title1">Todo List</h1>
      <p className="title2">add thing to do</p>
      </div>
      <div className="todolist">
        <Dolist data={data} setData={setData}/>
      </div>
      <div className="morebutton">
       <Morebutton data={data} setData={setData}/>
      </div>
      <div className="inputforadd">
      <Create setData={setData}/>
      </div>
    </div>
  );
}

export default Home;
