import React from 'react'
import '../css/dashcard.css'
import {Link} from 'react-router-dom'

function DashCard({title,count,view,cls,clsh,path}) {
  return (
    <>
        <div className="dashcard">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className= {'numb ' + (cls? cls : '')}>
                    <h1 className={'count '+ (clsh? clsh : '')} >{count}</h1>
            </div>
              { view ? <Link to={path} className='vd_btn' >View Details</Link>
              : ''}
        </div>
    </>
  )
}

export default DashCard