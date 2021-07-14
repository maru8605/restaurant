

const Reservation = ({reservation, deleteReservation}) => (
    
    <div className='reservation' >
       <p>NAME:  <span>{reservation.client}</span></p>
       <p>EMAIL:  <span>{reservation.email}</span></p>
       <p>DATE:  <span>{reservation.date}</span></p>
       <p>TIME:  <span></span>{reservation.time}</p>
       <p>PEOPLE:  <span>{reservation.select}</span></p>

       <button 
       className='delete'
       onClick= { () => deleteReservation(reservation.id)} >DELETE RESERVATION</button>
    </div>
)

export default Reservation
