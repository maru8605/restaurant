import TextCard from './TextCard'
import ImgCard from './ImgCard'
import Bosque from '../img/bosque.jpg'

const Place = () => {
    return (
        <section className='place'>
            <div className='place-container'>
                <ImgCard  src={Bosque}/>
                <TextCard
                 title='Enjoyable place for all the family'
                 text='Our relaxed sorroundings make dinig whit us a great experience for everyone. We can even 
                 arrange a tour of the farm before you meal'/>
            </div>
            <div  className='place-container'>
                <TextCard
                title='The moust locally source a food'
                text=' All our ingredients come directly from our farm or locally fishery. So you can be sure that 
                you´re eating the fresh, most sustainable food ' />
                <ImgCard  src={Bosque}/>
            </div>
        </section>
    )
}

export default Place
