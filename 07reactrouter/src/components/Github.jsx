import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/arjuncodess');
  return response.json();
}

export default function Github() {
  const data = useLoaderData();
  
  return (
    <div className='text-center bg-gray-600 m-4 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <br />
      Github Username: {data.login}
      <br />
      Github Profile Picture: <img className='rounded-full w-40' src={data.avatar_url} />
    </div>
  )
}