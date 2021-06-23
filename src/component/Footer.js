import Logo from './Logo'

const Footer = () => {
    return (
        <div className='footer'>
            <Logo/>
            <div className='text-footer-container'>
                <div className='text-footer'>
                    <p>MARTHWAITE. SEDBERES</p>
                    <p>CUMBRIA</p>
                    <p>+00 44 123 4567</p>
                </div>
                <div text-footer>
                    <p>OPEN TIMES</p>
                    <p>MON-FRI 09:00 AM - 10:00 PM</p>
                    <p>SAT-SUN: 09:00 AM - 11:30 PM</p>
                </div>
             </div>   
        </div>
    )
}

export default Footer
