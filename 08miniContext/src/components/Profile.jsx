import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)

  if(!user) return <h2>Not logged in...</h2>

  return (
    <div>
        <h2>Hi there, @{user.username}!</h2>
    </div>
  )
}