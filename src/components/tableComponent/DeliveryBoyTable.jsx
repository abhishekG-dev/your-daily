import React, { useEffect } from 'react'
import Table from '../Table'
import {deliveryBoyDetails} from '../../data/details'

function DeliveryBoyTable({setTab}) {
  useEffect(()=> setTab('delivery boy'))
  return (
    <>
        <Table details={deliveryBoyDetails} />
    </>
  )
}

export default DeliveryBoyTable