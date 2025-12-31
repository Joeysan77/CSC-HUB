import {useState} from 'react'
import {Icon} from './Logo'
import {useLocation} from 'react-router-dom'
import Dark from './Dark'
import Menu from './Menu'


export default function Header() {

    const [showDark, setShowDark] = useState(false) 
    const [showMenu, setShowMenu] = useState(false) 
    

    const location = useLocation()
    const path = location.pathname
    let logo;
    let page;
    
    if (path === '/') {
        logo = true
        
    } else if (path === '/assignment_hub') {
        logo = false
        page = "Assignment Hub"
    } else if (path === '/announcements') {
        logo = false
        page="Announcements"
    }
    
    return (
    <>
       
        <Dark
        show = {showDark}
        zIndex="z-[11]"
        onClick={() => {
            setShowDark(false)
            setShowMenu(false)
        }}
        />
        
        <Menu
        show={showMenu}
        onClose={() => {
            setShowDark(false)
            setShowMenu(false)
        }}
        />
    
        <div className="w-full fixed shadow flex between py-1.5 v-center px-2 top-0 backdrop-blur-lg z-[10]">
            <div className="flex gap-3 v-center">
                <Icon
            size={logo ? 'w-12' : 'w-10'}
            />
            <p className="text-lg font-medium tpri">{page}</p>
            </div>
            
            <div 
            onClick={() => {
                setShowDark(true)
                setShowMenu(true)
            }} 
            className="wpri px-3 py-1 rounded ablue-sm">
                <i className="fal fa-bars text-lg tpri"></i>
            </div>
            
        </div>
     </>
    )
}
