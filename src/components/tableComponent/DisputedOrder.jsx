import React,{useEffect} from 'react'
import Table from '../Table'
import {disputedOrder} from '../../data/details'

function DisputedOrder({setTab}) {
    useEffect(()=> setTab('disputed order'))
  return (
    <>
     <Table  details={disputedOrder} />
    </>
  )
}

export default DisputedOrder