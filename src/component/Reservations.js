import Reservation from "./Reservation";


const Reservations = ({reservations, onDelete, onToggle}) => {
    return (
        <>
          {reservations.map( (reservation, index) => (
            <Reservation
            key={index}
            reservation={reservation}
            onDelete={onDelete}
            onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Reservations
