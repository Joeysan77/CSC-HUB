import {useState} from 'react'
import Announcement from '../components/Announcement'
import AnnouncementsHub from '../components/AnnouncementsHub'
import {Link} from 'react-router-dom' 


export default function Announcements() {

    const [shake, setShake] = useState(false)
    

    return (
        <div>
            <div className="flex between px-3 -mt-8">
                <div className="flex gap-3 mx-3">
                    <p className="text-xl font-medium">Announcements Hub</p>
                </div>
                <div>
                <i
                
                onClick={() => {
                    setShake(true)
                    setTimeout(() => {
                        setShake(false)
                    } , 2009)
                }}
                
                 className={`${shake ? 'tgold scale-120 pointer-events-none fa-shake' : 'tgray'} fa-solid  fa-bell text-xl px-3 `}></i>
                </div>
            </div>
            
            <AnnouncementsHub/>
            
        </div>
    )
}
