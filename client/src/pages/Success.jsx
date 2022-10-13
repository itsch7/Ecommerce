import React from 'react'
import { useLocation } from 'react-router-dom'
function Success() {
    const location = useLocation()
    console.log(location);
  return (
    <div className='success'>Success</div>
  )
}

export default Success