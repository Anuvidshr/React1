import React from 'react'
import { useParams } from 'react-router-dom'
// useParams is a hook that returns an object of key/value pairs of URL parameters.

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User


