

const MiniCard = ({text, title, img}) => {
    return (
        <div>
            <img src={img}/>
            <div mini-card-text>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default MiniCard
