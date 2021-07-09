import Button from "./Button"
import Logo from './Logo'
const Header = () => {
    const onClick = (e) =>{
        
        console.log('click')
    }

    return (
        <section className='header'>
            <Logo
            color='#ffffff'/>
            <div className='header-text'>
                <div>
                    <h2>Exquisite dining since 1989</h2>
                    <p>Expirience our seasonal menu in beutiful contry sorroundings.
                        Eat the fresh produce from the confort of our farmhouse.
                    </p>
                    <Button
                     color='#e6e6e6' 
                     backgroundColor='transparent'
                     border='1px solid #e6e6e6'
                     text='BOOK A TABLE'
                     onClick={onClick}/>
                </div>
                <div className='img-header'>
                    
                </div>   
            </div>


        </section>
    )
}

export default Header
