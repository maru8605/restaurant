import TextCard from "./TextCard"
import MiniCard from "./MiniCard"

import Food1 from '../img/food1.jpg'
import Food2 from '../img/food2.jpg'
import Food3 from '../img/food3.jpg'
const Menu = () => {
    return (
        <section className='menu-container'>
            <TextCard
             color='#ffffff'
             title='A few highlights from our menu'
             text=' We cater from all dietary requirements but here´s a glimpse at some of our
             diner´s favourites. Our menu is revamped every season'
             className='text-card'/>
            <div>
               <MiniCard
                img={Food1}
                title='Seared Salmon Filled'
                text='Our locally sourced salmon served with a refreshing buckweat summer salad'
                color='#ffffff'
                />
               <MiniCard
               img={Food2}
               title='Rosemary Fillet Mignon'
               text='Our locally sourced salmon served with a refreshing buckweat summer salad'
               color='#ffffff'/> 
               <MiniCard
               img={Food3}
               title='Summer Fruit chocolate Mouse '
               text='Our locally sourced salmon served with a refreshing buckweat summer salad'
               color='#ffffff'/> 
            </div>
        </section>
    )
}

export default Menu
