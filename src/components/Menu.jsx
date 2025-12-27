import {Link, useLocation } from 'react-router-dom'
import {useState} from 'react'

export default function Menu({show, onClose}) {

    const location = useLocation()
    const path = location.pathname
    let active;
    
    if (path === '/') {
        active = 'home'
    } else if (path === '/assignment_hub') {
        active = 'assignment' 
    } else if (path === '/announcements') {
        active = 'announcements'
    }

    return (
        <div className={` w-[60%] top-0 right-0 fixed bg-white/70 rounded-l-xl h-full z-[21] ${show ? '' : 'hide translate-x-10'}`}>
            <p className="text-xl text-center font-medium my-5">Menu</p>
            
            <div className="w80 my-10">
                
                <Button
                icon="fa-home"
                text="Home"
                active={active === 'home'}
                to="/"
                onClick={onClose}
                />
                
                <Button
                icon="fa-book"
                text="Assignment"
                active={active === 'assignment'}
                to="/assignment_hub"
                onClick={onClose}
                />
                
                
                <Button
                icon="fa-megaphone"
                text="Annoucements"
                active={active === 'announcements'}
                to="/announcements"
                onClick={onClose}
                />
                
                <Button
                icon="fa-group"
                text="Events"
                />
                
                <Button
                icon="fa-info-circle"
                text="About"
                />
                
            </div>
            <i onClick={onClose} className="fal fa-chevron-right absolute top-0 left-0 mx-2 my-1 text-lg "></i>
        </div>
    )
}

function Button({icon, text, to, active, onClick}) {
    return (
        <Link onClick={onClick} to={to} className={`${active ? 'blue font-medium shadow' : '' } flex py-1 gap-5 v-center my-1 px-3 rounded-lg `}>
            <div className="flex center w-3 max-w-3">
                <i className={`${icon} ${active ? 'fas' : 'far'} text-lg`}></i>
            </div>
            <p className="">{text}</p>
        </Link>
    )
}
