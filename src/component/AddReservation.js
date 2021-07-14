import { useState } from "react"

const AddReservation = ({makeReservation}) => {
    const [reservation, setReservation] = useState({
       client: '',
       email: '',
       date: '',
       time: '',
       select: ''
    })
//estado de los errores
   const [error, setError] = useState(false)

// leer los imputs y actualizar el state
    const actualizarState = (e) =>{
       setReservation({
           ...reservation,
           [e.target.name]: e.target.value
       })
    }
// extraer los datos
    const {client, email, date, time, select } = reservation;
// submit evento 
    const onSubmit = e =>{
        e.preventDefault()
        
    // validar
        if(client.trim() === '' || email.trim() === '' || date.trim() === '' || time.trim() === '' ||
        select.trim() === '' ){
            setError(true)
            return;
        }
    // elimina mensaje de error 
        setError(false)

    // id
    reservation.id = Math.floor(Math.random() * 10000) + 1
    console.log(reservation)
    // crear reservacion
    makeReservation(reservation)

    // resetear el form 
    setReservation({
        client: '',
        email: '',
        date: '',
        time: '',
        select: ''
    })
    }

    return (
        <section>
        { error ? <p className='error'> Todos los campos son obligatorios</p> : null}
        <form className='form' onSubmit={onSubmit}>
            <div>
                <input
                className='form-input'
                type='text'
                placeholder='Add name'
                name='client'
                onChange={actualizarState}
                value={client} 
                />
            </div>
            <div>
                <input
                className='form-input'
                type='text'
                placeholder='Add Email '
                name='email'
                onChange={actualizarState} 
                value={email} />
            </div>
            <div className='select-day-time'>
                <label>Pick day</label>
                <input
                type='date'
                className='select-time'
                name='date'
                onChange={actualizarState}
                value={date}  />
            </div>
            <div className='select-day-time'>
                <label>Pick time</label>
                <input
                type='time'
                className='select-time'
                name='time'
                onChange={actualizarState}
                value={time}  />
            </div>
            <select className='select-people' name='select' onChange={actualizarState} value={select}  >
                <option value='one' selected>1 Persona</option>
                <option value='two'>2 Personas</option>
                <option value='three'>3 Personas</option>
                <option value='four'>4 Personas</option>
                <option value='five'>5 Personas</option>
                <option value='more'>6 Personas o más</option>
            </select>
            <input type='submit' className='form-button' value='MAKE RESERVATION'/>
        </form>   
        </section>  
    )
}

export default AddReservation

