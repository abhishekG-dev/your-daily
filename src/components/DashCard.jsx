import React from 'react'
import '../css/dashcard.css'

function DashCard({title,count}) {
  return (
    <>
        <div className="dashcard">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="numb">
                    <h1>{count}</h1>
            </div>
                <button className='vd_btn' >View Details</button>
        </div>
    </>
  )
}

export default DashCard