import { Dispatch } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { removeRservation } from "../app/features/reservationSlice"

interface ReservationCardTypes {
  name:string
  index:number
}

export default function ReservationsCard({name,index}:ReservationCardTypes) {

  const dispatch = useDispatch()

  const handleRemoveReservation = () => {
    dispatch(removeRservation(index))
  }

  return (
    <div  className="reservation-card-container" onClick={handleRemoveReservation}>{name}</div>
  )
}

