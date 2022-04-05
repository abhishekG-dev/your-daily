import React from 'react'
import '../css/dashboard.css'
import DashCard from './DashCard'

function DashBoard() {
  return (
    <>
        <div className="dashboard_container">
            <div className="dashboard">
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
                <DashCard 
                  title={'Total Cart Person'}
                  count={12}  />
            </div>
        </div>
    </>
  )
}

export default DashBoard