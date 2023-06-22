import React from 'react'
import './Top.css'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <>
        <div class="top">
        <div class="top-item">
            <Link to='/'>Home</Link>
        </div>

        <div class="top-item">
            
        </div>

        <div class="top-item">
        <Link to='/Impressum'>Impressum</Link>
        </div>
    </div>
    </>
  )
}

export default Top