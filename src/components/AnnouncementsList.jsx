import {useState} from 'react'
import AnnouncementOverlay from './AnnouncementOverlay'
import {data} from './announcementdata'
import Announcements from './Announcements'
import HalfAn from './HalfAn'
import {Link} from 'react-router-dom' 

export default function AnnouncementsList() {

    const [showOverlay, setShowOverlay] = useState(false)
    const [content, setContent] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [status, setStatus] = useState()

    return (
    <>
    
        <AnnouncementOverlay 
        show={showOverlay}
        onClose={() => {
            setShowOverlay(false)
        }}
        content={content}
        title={title}
        status={status}
        date={date}
        />
    
        <div className="py-5">
            {data.slice(0, 2).map((a) => {
                return (
                    <Announcements 
                    status={a.status}
                    title={a.title}
                    date={a.date}
                    desc={a.desc}
                    onClick={() => {
                        setShowOverlay(true)
                        setContent(a.content)
                        setTitle(a.title)
                        setStatus(a.status)
                        setDate(a.date)
                    }}
                    />
                )
            })}
            
            {data.length > 2 ? 
            <>
            {data.slice(2, 3).map((a) => {
                return (
                    <HalfAn
                    status={a.status}
                    date={a.date}
                    title={a.title}
                    desc={`${a.desc.slice(0, 26)}... `}
                    />
                )
            })}
            
            <Link to='/announcements' className="tblue w80 font-medium text-sm my-3">
                View More
            </Link>
            </>
           : '' }
        </div>
    </>
    )
}