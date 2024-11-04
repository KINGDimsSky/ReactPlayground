import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilePage = () => {
    const username = useLogin()
  return (
    <div className="profile">
        <h2>Halo {username}</h2>
    </div>
  )
}

export default ProfilePage