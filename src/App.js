import Login from "./Login"
import Users from "./Users";
import About from "./About"
import { useState } from "react";

export const Introduction=({setModalIsOPen})=>{

  const openModal = ()=>{
    setModalIsOPen(true)
  }

  return(
    <>

    <button className="logbtn" onClick={openModal}>Login</button>

    </>
  )
};

   
const App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
<div>
  <About/>
<Login setIsLoggedIn={setIsLoggedIn}/>
<Users isLoggedIn={isLoggedIn}/>
 
</div>


  );
    
};

export default App;
