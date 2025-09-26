// import React, { useEffect, useState } from 'react'
// import React, {useEffect,useState} from 'react'
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

const Home = () => {
    let [apiData, setapiData] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
            console.log(data);
            setapiData(data.recipes)
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
    <div>
        <button onClick={lunch}>Lunch</button>
        <button onClick={dinner}>Dinner</button>
        <button onClick={breakfast}>Breakfast</button>
        <button onClick={fun1}>acs</button>
         <button onClick={fun2}>des</button>
       { 
       apiData.map((a,index)=>{
            return(<>
            <div id="card">
                <img src={a.image}/>
                <p>{a.name}</p>
                <button onClick={()=>deletee(index)}>delete</button>
                <p>{a.rating}</p>
                <button onClick={()=>saveItem(a)}>save</button>
            </div>
            </>)
        })
        }
    </div>
  )
}

export default Home

