import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import AddReservation from "./AddReservation";
import Reservation from "./Reservation";
import Logo from "./Logo";
import TextCard from "./TextCard";
import Footer from "./Footer";


const ReservationForm = () => {

//Reservas en LocalStorage
    let watchReserv = JSON.parse(localStorage.getItem('reservations'))
    if(!watchReserv){
        watchReserv = [];
    }
// imprimiendo reservas , estado
    const [reservations, setReservations] = useState(watchReserv)

// 
    useEffect( () => {
        if(watchReserv){
            localStorage.setItem('reservations', JSON.stringify(reservations))
        }else{
            localStorage.setItem('reservations', JSON.stringify([]))
        }
    }, [reservations]) 
// toma las citas viejas y agrega nuevas
    const makeReservation = reservation =>{
        setReservations([
            ...reservations,
            reservation
        ])
    }
// borrar reservas
    const deleteReservation = id => {
       const newReservation = reservations.filter( reservation => reservation.id !== id)
       setReservations(newReservation)
    }

    return (
        <>
        <section className='form-container'>
            <div className='logo form-logo'>
                <Logo 
                color='#ffffff'/>
                <Link to='/' className='back'>Home</Link>
            </div>
            <div className='flex-form'>
                <TextCard
                    color='#ffffff'
                    title='The moust locally source a food'
                    text=' All our ingredients come directly from our farm or locally fishery. So you can be sure that 
                    you´re eating the fresh, most sustainable food. All our ingredients come directly from our farm or locally fishery. So you can be sure that 
                    you´re eating the fresh, most sustainable food, etc.  ' />
                
                <AddReservation makeReservation={makeReservation}/>
            </div>  
            <div className='reservation-container'>
                {reservations.map( reservation => (  

                    <Reservation
                    key={reservation.id}
                    reservation={reservation}
                    deleteReservation={deleteReservation}/>
                    
                ))}
                   
            </div>    
        </section>
        <Footer/>  
        </>
    )
}

export default ReservationForm
