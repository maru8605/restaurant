
const MiniCard = ({text, title, img, color}) => {
    return (
        <div className='mini-card' style={{color:color}}>
            <img src={img}/>
            <div className='mini-card-text'>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default MiniCard
