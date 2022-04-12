import React, { useEffect } from 'react'
import Table from '../Table'
import {userDetails} from '../../data/details'

function UserDetail({setTab}) {
  useEffect(()=> setTab('user detail'))
  return (
    <>
    <Table details={userDetails} />
    </>
  )
}

export default UserDetail