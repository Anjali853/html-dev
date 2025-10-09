import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    let [data, setdata] = useState({
        email: "",
        password: ""
})
    function fun1(){
        let {name,value} = e.target;
        setdata({...data,[name]:value})
        console.log(data);

        // setShow(data);

    }
  return (
    <div>
        <input name='email' value={data.email} onChange={fun1}  type='email' placeholder='email'/>
        <br></br>
        <br></br>
        <input name='password' value={data.password} onChange={fun1}  type='password' placeholder='password'/>
        <br></br>
        <br></br>

<Link to="/signup">
<button>Signup</button>
</Link>

    </div>
  
  )
}

export default Login