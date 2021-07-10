import Button from "./Button"
import Logo from './Logo'
import TextCard from "./TextCard"
import FotoHeader from'../img/food1.jpg'

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
                    <div className='header-flex'>
                    <TextCard
                    color='#ffffff'
                    title='Exquisite dining since 1989'
                    text='Expirience our seasonal menu in beutiful contry sorroundings.
                    Eat the fresh produce from the confort of our farmhouse.' /> 
                    <Button
                    color='#e6e6e6' 
                    backgroundColor='transparent'
                    border='1px solid #e6e6e6'
                    text='BOOK A TABLE'
                    onClick={onClick}/>
                    </div>
                    <div className='img-header'>
                        <img src={FotoHeader}/>    
                    </div>               
                </div>            
            </div> 
        </section>
    )
}

export default Header
