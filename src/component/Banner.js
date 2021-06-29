// importar imagen 
import Button from "./Button"
const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner-text'>
                <p>Ready to make a reservation?</p>
            </div>
            <Button
            color='#e6e6e6' 
            backgroundColor='transparent'
            border='1px solid #e6e6e6'
            text='BOOK A TABLE'
            // onClick={onClick}
            />
        </section>
    )
}

export default Banner
