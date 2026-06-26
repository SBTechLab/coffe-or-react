import React, {useState, useContext} from 'react'
import UserContet from '../Context/UserContext'


function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    

    const  handlSubmit = () => {

    }
  return (
    <div>
        <h2> Login</h2>

        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target) }
        placeholder='username' /> 

        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target) }
        placeholder='pssword'/>
        
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login