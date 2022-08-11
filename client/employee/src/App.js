import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Signup from "./Components/Signup";
import Users from "./Components/Users";
import Lottie from "lottie-react";
import BusinessmanAnimation from './loader.json'
import animation from './loader.json'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

 const [start,setStart] = useState(false);
 const [user,setUser] = useState(false);
 const startHandle = e =>{
   e.preventDefault();
   console.log(start);
   setStart(true);

 }
 const userHandle = e =>{
  e.preventDefault();
  console.log(start);
  setUser(true);

}

 const defaultOptions = {
  loop: false,
  hover:true,
  autoplay: true,
  // here is where we will declare lottie animation
    animationData: animation,
    rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
  },
};
 


  return (
   <div>
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px"}}>
          <div>
          <Lottie animationData={BusinessmanAnimation} style={{width:"480px",height:"480px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} />
          </div>
           <div>
           <h1>Employee Manager is here</h1>
           </div>
           <div style={{padding:"10px"}}>
            <Button type="submit" color="dark"
            onClick={startHandle}
            >Get Stated</Button> 
            <Button type="submit" color="dark"
            onClick={userHandle}
            style={{marginLeft:"10px"}}
            >Show Employee</Button> 
            <br/>
            </div>
    </div>
 
   <div>
    {
    start ? 
    <Signup/>:
    user ?
    <div >
    {/* <p style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>Click Get Started to continue</p> */}
     
    <Users/>
    </div>
    :
     <p style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>Click to show Employee</p> 

    }
   </div>
    </div>
  );
}

export default App;