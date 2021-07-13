import { useState } from "react"
import { useForm } from "react-hook-form";
import Logo from "./Logo"
import TextCard from "./TextCard"


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear]= useState('')
    const [hours, setHours] = useState('')
 
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);

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
                    
                <form className='form'>
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
                            <select className='select-time' value='hours' onChange={e => setHours(e.target.value)}>
                                
                                <option value='09' >09</option>
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
                    </form> 
            </div>
        </div>
    )
}

export default Form


{/* <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div>
                    <input
                    className='form-input'
                    type="text" 
                    placeholder="Add name" 
                    {...register("Add name", {required: true, maxLength: 25})} />
                </div>
                <div>
                    <input 
                    className='form-input'
                    type="email" 
                    placeholder="Add email" 
                    {...register("Add email", {required: true})} />
                </div>
                <div className='select-day-time'>
                    <label>Pick day</label>
                    <div>
                        <input type="number" placeholder="Day" {...register("Day", {required: true, max: 31, min: 1, maxLength: 1})} />
                        <input type="number" placeholder="Month" {...register("Month", {required: true, max: 12, min: 1, maxLength: 2})} />
                        <input type="number" placeholder="Year" {...register("Year", {required: true, max: 2022, min: 2021, maxLength: 3})} />
                    </div>
                </div>
                <div className='select-day-time'> 
                    <label> Pick time</label>
                    <div>
                        <select
                        className='select-time'
                         {...register("Hours", { required: true })}>
                            <option value="09">09</option>
                            <option value=" 10"> 10</option>
                            <option value=" 11"> 11</option>
                            <option value=" 12 "> 12 </option>
                            <option value=" 13"> 13</option>
                            <option value=" 14"> 14</option>
                            <option value=" 15"> 15</option>
                            <option value=" 16"> 16</option>
                            <option value=" 17"> 17</option>
                            <option value=" 18"> 18</option>
                            <option value=" 19"> 19</option>
                            <option value=" 20"> 20</option>
                            <option value=" 21"> 21</option>
                            <option value=" 22"> 22</option>
                            <option value=" 23"> 23</option>
                        </select>
                        <select
                        className='select-time'
                         {...register("Minutes", { required: true })}>
                            <option value="00">00</option>
                            <option value=" 15"> 15</option>
                            <option value=" 30"> 30</option>
                            <option value=" 45"> 45</option>
                        </select>
                        <select
                        className='select-time'
                         {...register("Time", { required: true })}>
                            <option value="AM">AM</option>
                            <option value=" PM"> PM</option>
                        </select>
                    </div>
                </div>
                <div>
                <select className='select-people' {...register("People", { required: true })}>
                    <option value="1 Persona">1 Persona</option>
                    <option value=" 2 Personas"> 2 Personas</option>
                    <option value=" 3 Personas"> 3 Personas</option>
                    <option value=" 4 Personas"> 4 Personas</option>
                    <option value=" 5 Personas o Más"> 5 Personas o Más</option>
                </select>
                </div>
                <input type="submit" className='form-button' value='MAKE RESERVATION' />
                </form> */}
