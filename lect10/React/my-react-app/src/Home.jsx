// import React, { useEffect, useState } from 'react'
// import React, {useEffect,useReducer,useState} from 'react'
// import Home from './App.css'
// const Home = () => {
//     let [ApiData, setData] = useState([])
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data)
//             setApiData(data)
//         })
//     },[])
//     return (
//         <div>
//             {
//                 ApiData.map((a)=>{0
//                     return(<>
//                     <p id='one'>{a.id}</p>
//                     <h>{a.title}</h>
//                     </>)
//                 }) 
            
//             }


//         </div>
//     )
// }

import react,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const Home = ({ apiData,setapiData,cart,setCart,filteredData,setFilteredData}) => {
    // let [apiData, setapiData] = useState([])
    // let [cart,setCart] = useState([])
    // let [filteredData, setFilteredData] = useState([])
    
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
            console.log(data);
            setapiData(data.recipes)
            setFilteredData(data.recipes)
        })
    },[])
    useEffect(()=>{
        localStorage.setItem("recipe",JSON.stringify(apiData))
    },[apiData])


    function deletee(id){
        let newArr=apiData.filter((a,b)=>{
         return b!==id
        })
        setapiData(newArr)
    } 

    function saveItem(item){
        let savedItems= JSON.parse(localStorage.getItem("savedRecipes")) || [];
        savedItems.push(item)
        localStorage.setItem("savedRecipes",JSON.stringify(savedItems))
        alert("Item saved successfully")
    }

    function fun1(){
        let Data1 = [...apiData].sort((a,b)=>{
            return a.rating-b.rating
        })
        console.log(Data1,"Sorted");
        setapiData(Data1)
    }

    function fun2(){
    }

    function lunch(){
        let filteredData = apiData.filter((a)=>{
            return a.mealType[0]=== "Lunch"
        })
        setapiData(filteredData)
    }

    function dinner(){
        let filteredData = apiData.filter((a)=>{
            return a.mealType[1]=== "Dinner"
        })
        setapiData(filteredData)
    }

    function breakfast(){
        let filteredData = apiData.filter((a)=>{
            return a.mealType[0]=== "Breakfast"
        })
        setapiData(filteredData)
    }

  return (
    <>
    <Link to={'/cart'}>
    <button>Go to Cart {cart.length}</button>
    </Link>
    {/* <button>Cart{cart.length}</button> */}
    <div>
        <button onClick={lunch}>Lunch</button>
        <button onClick={dinner}>Dinner</button>
        <button onClick={breakfast}>Breakfast</button>
        <button onClick={fun1}>acs</button>
         <button onClick={fun2}>des</button>


       { 
       filteredData.map((a,index)=>{
            return(<>
            <div id='card'>
                <img src={a.image}/>
                <p>{a.name}</p>
                {/* <button onClick={()=>AddtoCart(index)}>Cart</button> */}
                <p>{a.rating}</p>
                <button onClick={()=>setCart([...cart,a])}>add</button>
                <button >save</button>
            </div>
            </>)
        })
        }
    </div>
    </>
  )
}

export default Home

// import React from 'react'

// const Home = () => {
//     let [data, setdata] = useState({
//         name:"",
//         email: "",
//         password: ""
// })
//     function fun1(e){
//         let {name,value} = e.target;
//         setdata({...data,[name]:value})
//         console.log(data);

//         // setShow(data);

//     }
//   return (
//     <div>
//         <input name='name' value={data.name} onChange={fun1}  type='text' placeholder='name'/>
//         <br></br>
//         <br></br>
//         <input name='email' value={data.email} onChange={fun1}  type='email' placeholder='email'/>
//         <br></br>
//         <br></br>
//         <input name='password' value={data.password} onChange={fun1}  type='password' placeholder='password'/>
//         <br></br>
//         <br></br>

    
//     </div>
//   )
// }

// export default Home



// import React from 'react'

// const Home = () => {
//   return (
//     function fun1(){
//       if(!input.trim()){
//         alert("Please enter a search term");
//         return;
//       }
//       fetch()
//     }

//       <div>
//         <input type="text" onClick={(e)=>SetInput(e.target.value)}/>
//         <button onClick={fun1}>Search</button>
//       </div>
    
//   )
// }

// export default Home


// import React from 'react'
// import React, {useReducer} from 'react'

// const Home = () => {
//   function reduser(count,action){
//   if(action.type=='inc'){
//     return count+1
//   } else{
//     return count
//   }
// }
//   let [count,dispatch]=  useReducer(reduser,0)
//   return (
    
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=> dispatch({type: "inc"})}>Click</button>
//     </div>
//   )
// }

// export default Home


// import React from 'react'
// import React, {useReducer} from 'react'

// const Home = () => {
//   function reduser(color,action){
//     if(action.type=='r'){
//       return 'red'
//     }else if(action.type=='g')
//   }
//   return (
//     <div>
//       <button onClick={()=>dispatchEvent({type:'r'})}>red</button>
//       <button onClick={()=>dispatchEvent({type:'g'})}>green</button>
//     </div>
//   )
// }

// export default Home

// import React from 'react'

// const Home = () => {
//   return (
//     <div>hello</div>
//   )
// }

// export default Home


import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home