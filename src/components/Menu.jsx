import {Link, useLocation } from 'react-router-dom'
import {useState} from 'react'

export default function Menu({show, onClose}) {

    const location= useLocation()
    const path = location.path
    let active;
    

    return (
        <div className={` w-[60%] top-0 right-0 fixed bg-white rounded-l-xl h-full z-[21] ${show ? '' : 'hide translate-x-10'}`}>
            <p className="text-xl text-center font-medium my-5">Menu</p>
            
            <div className="w80 my-10">
                
                <Button
                icon="fa-home"
                text="Home"
                to="/"
                />
                
                <Button
                icon="fa-list"
                text="Assignment"
                to="/assignment_hub"
                />
                
                
                <Button
                icon="fa-speaker"
                text="Announcements"
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

function Button({icon, text, to}) {
    return (
        <Link to={to} className="flex py-2 gap-5 v-center my-1">
            <div className="flex center w-3 max-w-3">
                <i className={`far ${icon} text-lg`}></i>
            </div>
            <p className="">{text}</p>
        </Link>
    )
}