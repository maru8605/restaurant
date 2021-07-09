import Button from "./Button"
import Logo from './Logo'
import TextCard from "./TextCard"
import FotoHeader from'../img/header.jpg'
const Header = () => {
    const onClick = (e) =>{
        
        console.log('click')
    }

    return (
        <section className='header'>
            <Logo
            color='#ffffff'/>
            <div className='header-container'>
                <div className='header-text'>
                    <TextCard
                    color='#ffffff'
                    title='Exquisite dining since 1989'
                    text='Expirience our seasonal menu in beutiful contry sorroundings.
                    Eat the fresh produce from the confort of our farmhouse.' /> 
                    <div className='img-header'>
                        <img src={FotoHeader}/>    
                    </div>               
                </div>            
            </div> 
            <Button
            color='#e6e6e6' 
            backgroundColor='transparent'
            border='1px solid #e6e6e6'
            text='BOOK A TABLE'
            onClick={onClick}/>
        </section>
    )
}

export default Header
