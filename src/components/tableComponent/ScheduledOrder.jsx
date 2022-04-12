import React,{useEffect} from 'react'
import Table from '../Table'
import {scheduledOrder} from '../../data/details'

function ScheduledOrder({setTab}) {
    useEffect(()=> setTab('scheduled order'))
  return (
    <>
    <Table  details={scheduledOrder} />
    </>
  )
}

export default ScheduledOrder