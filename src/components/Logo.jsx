import {Link} from 'react-router-dom'

export function Icon({size}) {
    return (
    <Link to="/">
         <img src="icon2.png" className={` ${size} rounded-[11px]`}alt=""/>
    </Link>
           
    )
}
