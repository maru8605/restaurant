import Button from "./Button"
import Logo from './Logo'
const Header = () => {
    return (
        <section className='header'>
            <Logo/>
            <div className='header-text'>
                <div>
                    <h2>Exquisite dining since 1989</h2>
                    <p>Expirience our seasonal menu in beutiful contry sorroundings.
                        Eat the fresh produce from the confort of our farmhouse.
                    </p>
                    <Button />
                </div>
                <div className='img-header'>
                    <img  />
                </div>   
            </div>


        </section>
    )
}

export default Header
