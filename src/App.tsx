import "./App.css";
import ReservationsCard from "./components/ReservationsCard";
import { RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addRservation } from "./app/features/reservationSlice";  // Fixed spelling mistake

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addRservation(reservationNameInput)); // Fixed spelling mistake
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="">
                {reservations.map((name, index) => {
                  return <ReservationsCard key={index} name={name} index={index}/>;
                })}
              </div>
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              type="text"
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button type="submit">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;