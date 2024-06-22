import React from 'react'
import './display.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function display({value}) {
   
  return (
    <div className='display-container d-flex justify-content-end align-items-center'>
        <p>{value}</p>
    </div>
  )
}
