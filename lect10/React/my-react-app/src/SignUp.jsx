import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const SignUp = () => {
    let [show, setShow] = useState({})
    let [data, setdata] = useState({
        name:"",
        email: "",
        password: ""
})
    function fun1(){
        let {name,value} = e.target;
        setdata({...data,[name]:value})
        console.log(data);
    }
    function fun2(){
        setShow({...data});
        console.log(show);
    }
  return (
    <div>
        <input name='name' value={data.name} onChange={fun1}  type='text' placeholder='name'/>
        <br></br>
        <br></br>
        <input name='email' value={data.email} onChange={fun1}  type='email' placeholder='email'/>
        <br></br>
        <br></br>
        <input name='password' value={data.password} onChange={fun1}  type='password' placeholder='password'/>
        <br></br>
        <br></br>

<Link to="/login">
<button>Login</button>
</Link>

<button>onClick</button>

        

    
    </div>
  )
}

export default SignUp