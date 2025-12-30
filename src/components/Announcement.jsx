import {useState, useEffect} from 'react'
import AnnouncementView from './AnnouncementView'


export default function Announcement({type, title, desc, date, content}) {

    const [showView, setShowView] = useState(false)
    const [animate, setAnimate] = useState('opacity-0 translate-y-3 ')
    useEffect(() => {
        setAnimate('')
    }, [])
    
    return (
    <>
        <AnnouncementView
        show={showView}
        title={title}
        type={type}
        date={date}
        content={content}
        onClose={() => {
            setShowView(false)
        }}
        />
    
        <div
        onClick={() => {
            setShowView(true)
        }}
         className={`bg-white w90 shadow border border-black/10 rounded-xl py-3 my-8 ${animate}`}>
            <div className="flex w90 ">
                <Type
                type={type}
                />
            </div>
            
            <div className="my-3 border-b border-black/10 py-1">
                <p className="w90 font-medium my-3">{title}</p>
                <p className="w90 font-medium tgray text-sm">{date}</p>
            </div>
            
            
            <p className="tgray text-sm w90">{desc.slice(0, 55)}...</p>
            
            
            
        </div>
     </>
    )
}

function Type({type}) {

   let ty;
   let icon;

    if (type === 'urgent') {
        ty = 'red-sm tred'
        icon='fa-exclamation-triangle'
    } else if (type === 'important') {
        ty = 'orange-sm torange'
        icon='fa-bell-exclamation'
    } else if (type === 'notice') {
        ty = 'blue-sm tblue'
        icon='fa-info-circle'
    }

    return (
        <div className={`${ty} flex gap-3 px-2 py-1 rounded-lg v-center`}>
            <i className={`${icon} far `}></i>
            <p className="capitalize font-medium text-sm">{type}</p>
        </div>
    )
}