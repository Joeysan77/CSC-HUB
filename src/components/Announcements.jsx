import AnnouncementOverlay from './AnnouncementOverlay'

export default function Announcements({status, title, date, desc, show, onClick, onClose}) {

    let staCol;
    
    if (status === 'urgent') {
        staCol = 'bred tred red-sm'
    } else if (status === 'important') {
        staCol = 'borange torange orange-sm'
    } else if (status === 'notice') {
        staCol = 'bblue tblue blue-sm'
    }

    return (
    <>
    
    
        
        <div onClick={onClick} className="border w90 border-black/10 rounded-xl my-5 ">
            <div className="py-5 px-5 border-b border-black/10">
                <span className={` ${staCol} py-1 px-2 border-2 rounded-full uppercase text-sm`}>{status}</span>
                
                <p className="text-lg font-medium text-center   my-5">{title}</p>
                
                <p className="tgray-md text-center ">{date}</p>
            </div>
            
            <p className="tgray text-center my-5 py-3 w90">{desc}</p>
        </div>
    </>
    )
}