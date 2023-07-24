

import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const InstructorsDetail = () => {
  // let param = useParams()
  let {id} = useParams()
  console.log({id})
  // let location= useLocation()
  let {state, pathname}= useLocation()
  console.log(state)
 
  return (
    <div className='p-3'>
      <p>
        from useParam: I'am instructor{" "}
        <span className='text-danger fw-bolder'>{id}</span>
      </p>

      <p>
        from useLocation: I'am instructor{" "}
        <span className='text-danger fw-bolder'>{state.name}</span>
      </p>
      <p>Our path is: {pathname}</p>
    </div>
  )
}

export default InstructorsDetail