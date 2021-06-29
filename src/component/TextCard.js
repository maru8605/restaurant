

const TextCard = ({title, text, color}) => {
    return (
        <div className='text-card' style={{color:color}}>
           <h4>{title}</h4>
           <p>{text}</p>
        </div>
    )
}



export default TextCard
