import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username })
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        
        <button onClick={ handleSubmit }>Submit</button>
    </div>
  )
}