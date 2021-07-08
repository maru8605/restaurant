import { useState } from "react"

const Form = () => {
    return (
        <div>
           <form>
               <div>
                   <label>Name</label>
                   <input
                   type='text'
                   placeholder='Add name'
                //    value y evento onchange 
                   />
               </div>
               <div>
                   <label>Email</label>
                   <input/>
               </div>
               <div>
                   <label>Pick day</label>
                   <input/>
                   <input/>
                   <input/>
               </div>
               <div>
                   <label>Pick time</label>
                   <input/>
                   <input/>
                   <input/>
               </div>
               <div>
                   <select/>
               </div>
               <button>Make reservation</button>
            </form> 
        </div>
    )
}

export default Form
