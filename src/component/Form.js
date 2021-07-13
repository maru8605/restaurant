// import { useState } from "react"
import { useForm } from "react-hook-form";
import Logo from "./Logo"
import TextCard from "./TextCard"


const Form = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [day, setDay] = useState('')
    // const [month, setMonth] = useState('')
    // const [year, setYear]= useState('')
 


    return (
        <div className='form-container'>
            <div className='logo form-logo'>
                <Logo 
                color='#ffffff'/>
            </div>
            <div className='flex-form'>
                <TextCard
                    color='#ffffff'
                    title='The moust locally source a food'
                    text=' All our ingredients come directly from our farm or locally fishery. So you can be sure that 
                    you´re eating the fresh, most sustainable food. All our ingredients come directly from our farm or locally fishery. So you can be sure that 
                    you´re eating the fresh, most sustainable food, etc.  ' />   
                {/* <form className='form'>
                    <div>
                        <input
                        className='form-input'
                        type='text'
                        placeholder='Add name'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input
                        className='form-input'
                        type='text'
                        placeholder='Add Email '
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='select-day-time'>
                        <label>Pick day</label>
                        <div>
                            <input
                            placeholder='Day'
                            type='number'
                            value={day}
                            onChange={e => setDay(e.target.value)} 
                            />
                            <input
                            placeholder='Month'
                            type='number'
                            value={month}
                            onChange={e => setMonth(e.target.value)}/>
                            <input
                            placeholder='Year'
                            type='number'
                            value={year}
                            onChange={e => setYear(e.target.value)}/>
                        </div>
                    </div>
                    <div className='select-day-time'>
                        <label>Pick time</label>
                        <div>
                            <select className='select-time'>
                                <option value='09' selected>09</option>
                                <option value='10' >10</option>
                                <option value='11' >11</option>
                                <option value='12' >12</option>
                                <option value='13' >13</option>
                                <option value='14' >14</option>
                                <option value='15' >15</option>
                                <option value='16' >16</option>
                                <option value='17' >17</option>
                                <option value='18' >18</option>
                                <option value='19' >19</option>
                                <option value='20' >20</option>
                                <option value='21' >21</option>
                                <option value='22' >22</option>
                                <option value='23' >23</option>
                            </select>                           
                            <select className='select-time'>
                                <option value='00' selected>00</option>
                                <option value='15'>15</option>
                                <option value='30'>30</option>
                                <option value='45'>45</option>
                            </select>
                            <select className='select-time'>
                                <option value='am' selected>AM</option>
                                <option value='pm'>PM</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <select className='select-people' name='select'>
                            <option value='one' selected>1 Persona</option>
                            <option value='two'>2 Personas</option>
                            <option value='three'>3 Personas</option>
                            <option value='four'>4 Personas</option>
                            <option value='five'>5 Personas</option>
                            <option value='more'>6 Personas o más</option>
                        </select>
                    </div>
                    <input type='submit' className='form-button' value='MAKE RESERVATION'/>
                    </form>  */}
            </div>
        </div>
    )
}

export default Form
