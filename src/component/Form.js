import { useState } from "react"
import Logo from "./Logo"
import TextCard from "./TextCard"
const Form = () => {
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
                    you´re eating the fresh, most sustainable food ' />   
                <form className='form'>
                    <div>
                        <input
                        className='form-input'
                        type='text'
                        placeholder='Add name'
                        //    value y evento onchange 
                        />
                    </div>
                    <div>
                        <input
                        className='form-input'
                        type='text'
                        placeholder='Add Email '/>
                    </div>
                    <div className='select-day-time'>
                        <label>Pick day</label>
                        <div>
                            <input
                            />
                            <input
                            />
                            <input
                            />
                        </div>
                    </div>
                    <div className='select-day-time'>
                        <label>Pick time</label>
                        <div>
                                <input
                                    />
                                <input
                                    />
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
                    <button className='form-button'>Make reservation</button>
                    </form> 
            </div>
        </div>
    )
}

export default Form
