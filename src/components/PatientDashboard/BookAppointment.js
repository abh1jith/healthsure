import React from 'react'
import { useParams } from 'react-router-dom'

const BookAppointment = () => {
  const {doctorid} = useParams('doctorid')
  console.log(doctorid)

  return (
    <div className='container-fluid p-0'>BookAppointment: {doctorid}</div>
  )
}

export default BookAppointment

