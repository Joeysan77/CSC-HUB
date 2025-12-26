import Announcement from '../components/Announcement'
import AnnouncementsHub from '../components/AnnouncementsHub'

export default function Announcements() {
    return (
        <>
        <div className="">
            <p className="text-2xl text-center tblue  font-medium">Announcements</p>
            
            <p className="tgray text-center my-3">Stay updated with the latest departmental announcements, deadlines, and notices.</p>
        </div>
        
        <div className="line10 w90"></div>
        
        <AnnouncementsHub/>
        
        </>
    )
}
