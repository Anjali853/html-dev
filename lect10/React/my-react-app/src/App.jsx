// import React, { useState } from 'react'
// import Home from './Home.jsx'
// const App = () => { 
//   let [state,SetState] = useState(0)

//   let data = new Date().toLocaleTimeString()
  
//   console.log(data);
  
//   // let [state,SetState] = useState("blueviolet")
  

//   function fun1(){
//     SetState(state+1)
  

    
//   }
//   function fun2(){
//     SetState(state-1)
//   }
//    function fun3(){
//     SetState(0)
//   }

//   setInterval(()=>{
//     SetState(new Date().toLocaleTimeString())
//   })
//   return (
//     <div style= {{backgroundColor:state ,height:1100}}>
//       <h2> {state}</h2>
//        <button onClick={()=>SetState(state+1)}>++</button>
//        <button onClick={()=>SetState(state-1)}>--</button>
//       <button onClick={()=>SetState(0)}>reset</button>
//        <Home />
//      </div>
//  )
//  }

// export default App


import React from 'react'
import Home from './Home'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import {Route , Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App