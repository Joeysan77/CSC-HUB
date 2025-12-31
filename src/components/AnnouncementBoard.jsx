import {useState} from 'react'
import {Link} from 'react-router-dom' 

export default function AnnouncementBoard() {

    const [shake, setShake] = useState(false)

    return (
        <Link to='/announcements'>
            
            <div className="w-[95%] ml-[2%]">
                
                <div className="flex between px-4 py-2 v-center">
                    
                    <div className="flex v-center gap-5 my-5">
                        <i
                        
                        onClick={(e) => {
                            setShake(true)
                            e.stopPropagation()
                            e.preventDefault()
                            setTimeout(() => {
                                setShake(false)
                            }, 2000)
                        }}
                         className={`${shake ? 'tgold fa-shake scale-110 pointer-events-none ' : 'tgray'} fa fa-bell text-2xl`}></i>
                        <Link to='/announcements' className="text-xl font-semibold">Announcements</Link>
                    </div>
                    
                    <Link to='/announcements'>
                        <i className="fa fa-arrow-right"></i>
                    </Link>
                    
                </div>
                
                <p className="text-black/40 w80 my-3 ">All department announcements in one place. Don’t miss updates</p>
                
                <div className="flex between gap-3 px-3 py-5">
                    
                    
                    <Card
                    text="Urgent"
                    count='2'
                    icon='fa-exclamation-triangle'
                    color="tred"
                    />
                    
                    <Card
                    text="Important"
                    count='4'
                    icon='fa-bell-exclamation'
                    color='torange'
                    />
                    
                    <Card
                    text="Notice"
                    count='1'
                    icon='fa-info-circle'
                    color='tblue'
                    />
                    
                </div>
                
                
            </div>
            
        </Link>
    )
}

function Card({icon, text, count, color}) {
    return (
        <div className="bg-white shadow rounded-xl border border-black/10  flex-1 hsgold-lg">
             
            <div className="flex center my-5">
                <i className={`${icon} ${color} far text-3xl `}></i>
            </div>
            
            <div  className="pb-2">
                <p className="tgray text-sm text-center">{text}</p>
                <p className="font-semibold mt-2 text-xl  text-center">{count}</p>
            </div>
            
        </div>
    )
}