import React from 'react'
import '../css/dashcard.css'

function DashCard({title,count,view,cls,clsh}) {
  return (
    <>
        <div className="dashcard">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className= {'numb ' + (cls? cls : '')}>
                    <h1 className={'count '+ (clsh? clsh : '')} >{count}</h1>
            </div>
              { view ? <button className='vd_btn' >View Details</button>
              : ''}
        </div>
    </>
  )
}

export default DashCard