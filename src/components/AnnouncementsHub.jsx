import {useState} from 'react'
import {data, urgent, important, notice} from './announcementdata'
import Announcements from './Announcements'
import AnnouncementOverlay from './AnnouncementOverlay'

export default function AnnouncementsHub() {

    const [showOverlay, setShowOverlay] = useState(false)
    const [content, setContent] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [status, setStatus] = useState()
    


    const counts = [
        {
            count: urgent,
            type: 'tred red-sm',
            icon: 'fa-exclamation-triangle'
        },
        
        {
            count: important,
            type: 'torange orange-sm',
            icon: 'fa-exclamation-triangle'
        },
        
        {
            count: notice,
            type: 'tblue blue-sm',
            icon: 'fa-info-circle'
        },
    ]

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
    
        <div>
            <div className="flex between px-3 v-center my-10">
                <div className="text-lg"> 
                    Announcements 
                </div>
                 
                <div className="flex gap-3">
                    {counts.map((c) => {
                        return (
                            <Count
                            count={c.count}
                            type={c.type}
                            icon={c.icon}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                {data.map((a) => {
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
            </div>
        </div>
    </>
    )
}

function Count({count, type, icon }) {
    return (
        <div className={`${count.length > 0 ? type : 'tgray gray-sm'} flex center gap-3 rounded py-1 px-2`}>
            <i className={` far ${icon}   `}></i>
            <p className="text-sm font-medium">{count.length}</p>
        </div>
    )
}