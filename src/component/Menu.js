import TextCard from "./TextCard"
import MiniCard from "./MiniCard"
// importar imagenes 
const Menu = () => {
    return (
        <section className='menu-container'>
            <TextCard
             title='A few highlights from our menu'
             text=' We cater from all dietary requirements but here´s a glimpse at some of our
             diner´s favourites. Our menu is revamped every season'/>
            <div>
               <MiniCard
                // imagen
                title='Seared Salmon Filled'
                text='Our locally sourced salmon served with a refreshing buckweat summer salad'/>
               <MiniCard
               title='Rosemary Fillet Mignon'
               text='Our locally sourced salmon served with a refreshing buckweat summer salad'/> 
               <MiniCard
               title='Summer Fruit chocolate Mouse '
               text='Our locally sourced salmon served with a refreshing buckweat summer salad'/> 
            </div>
        </section>
    )
}

export default Menu
