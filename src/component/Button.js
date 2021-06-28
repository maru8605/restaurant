

const Button = ( props ) => {
    const {text, color, backgroundColor, border, onClick} = props
    return (
    <button style={{color: color, backgroundColor: backgroundColor, border:border}}
            className='btn'
            onClick={onClick} >{text}</button>
    )
}

export default Button
