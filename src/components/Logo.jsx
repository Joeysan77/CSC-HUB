import {Link} from 'react-router-dom'

export function Icon({size}) {
    return (
    <Link to="/">
         <img src="icon.png" className={` ${size} rounded `}alt=""/>
    </Link>
           
    )
}