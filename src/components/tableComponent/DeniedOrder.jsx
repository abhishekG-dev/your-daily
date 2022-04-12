import React, { useEffect } from 'react'
import Table from '../Table'
import {deniedOrders} from '../../data/details'

function DeniedOrder({setTab}) {
    useEffect(()=> setTab('denied order'))
  return (
    <>
        <Table  details={deniedOrders} />
    </>
  )
}

export default DeniedOrder 