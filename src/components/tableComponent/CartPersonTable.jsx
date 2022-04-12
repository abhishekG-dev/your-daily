import React, { useEffect } from 'react'
import Table from '../Table'
import {cartPersonDetail} from '../../data/details'

function CartPersonTable({setTab}) {

  useEffect(()=> setTab('cart person') )
  return (
    <>
    <Table details={cartPersonDetail} />
    </>
  )
}

export default CartPersonTable