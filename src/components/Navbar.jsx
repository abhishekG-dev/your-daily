import React from 'react'
import '../css/navbar.css'

function Navbar() {
  return (
    <>
    <nav>
        <div className="nav_brand">
            <img src="/assets/White BG.png" alt="logo" />
            <h1>Dashboard</h1>
        </div>
        <div className="icon_container">
            <img src="/assets/Group 1623.png" alt="" />
        </div>
    </nav>
    </>
  )
}

export default Navbar