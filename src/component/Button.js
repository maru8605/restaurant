import {Link} from 'react-router-dom';

const Button = ( props ) => {
    const {text, color, backgroundColor, border, onClick} = props
    return (
    <Link to='/reservation'
    style={{color: color, backgroundColor: backgroundColor, border:border}}
    className='btn link'
    onClick={onClick}> BOOK A TABLE </Link>
    )
}

export default Button
