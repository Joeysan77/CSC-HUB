import {Link} from 'react-router-dom'
import AnnouncementsList from './AnnouncementsList'
import {data} from './announcementdata'


export default function Announcement() {
    return (
    <div>
        <Link to="/announcements" className="flex between text-sm w90 tpri-lg ">
            <p>Announcements Page</p>
            <i className="fal fa-arrow-right text-lg"></i>
        </Link>
        <div className="mt-5 border rounded-lg border-black/20 w90 ">
            <div className="flex tpri-lg wfull between px-3 v-center border-b border-black/20 py-1">
                <div className="flex gap-2 v-center">
                    <i className="fal fa-exclamation-circle text-lg "></i><p>announcements</p>
                </div>
                
                <div className="tblue h-5 w-4 blue-sm flex center rounded py-1.5 px-1.5"><span className="">{data.length}</span></div>
                </div>
            
            <AnnouncementsList/>
            
        </div>
       <div className="line my-15 w90">
           
       </div>
    </div>
    )
}
