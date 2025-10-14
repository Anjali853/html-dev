import { createContext, useEffect } from "react";

let Context = createContext();


export default Context;

const ContextP=({children})=>{
    let data ={
        apiData:[],
        cart:[],
    }

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
    })
    let [val,dispatch] = useReducer(reducer,data)
    return(<div>
        <Context.Provider>
            {children}
        </Context.Provider>
    </div>

    )
}