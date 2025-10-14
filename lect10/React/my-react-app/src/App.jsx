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


// import React ,{useState}from 'react'
// import Home from './Home'
// import './App.css'
// import AddtoCart from './AddtoCart'
// // import SignUp from './SignUp'
// // import Login from './Login'
// import {Route , Routes} from 'react-router-dom'
// const App = () => {
//   let [apiData, SetData] = useState([])
//   let [filteredData, SetFilteredData] = useState([])

//   let [cart, setCart] = useState([])
//   return (
//     <div>
//        <Routes>
//         <Route path='/' element={<Home cart={cart} SetCart={setCart}
//         apiData={apiData} SetData={SetData} filteredData={filteredData} SetFilteredData={SetFilteredData} />} />
// {/* //         <Route path='/SignUp' element={<SignUp />} />
// //         <Route path='/Login' element={<Login />} /> */}
//            <Route path='/cart' element={<AddtoCart cart={cart}  />} /> 
// //       </Routes>

//         </div>
//   )
// }

// export default App

import React , {useState}from 'react'
import Home from './Home'
import './App.css'
import AddtoCart from './AddtoCart'
import { Route, Routes } from 'react-router-dom'

const App = () => {
     let [apiData, setapiData] = useState([])
     let [cart,setCart] = useState([])
     let [filteredData, setFilteredData] = useState([])
     
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home apiData={apiData} setapiData={setapiData} cart={cart} setCart={setCart} filteredData={filteredData} setFilteredData={setFilteredData} />} />
      {/* <img src={a.image}/> */}
                {/* <p>{a.name}</p>
                <button onClick={()=>AddtoCart(index)}>Cart</button>
                <p>{a.rating}</p>
                <button onClick={()=>saveItem(a)}>save</button> */}

         <Route path='/cart' element={<AddtoCart cart={cart} />} />
    </Routes>
    </div>
  )
}

export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default App