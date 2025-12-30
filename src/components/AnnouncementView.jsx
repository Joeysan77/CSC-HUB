import Dark from './Dark'

export default function AnnouncementView({show, onClose, title, type, date, content}) {
    return (
    <>
    
        <Dark
        show={show}
        zIndex='z-20'
        onClick={onClose}
        />
    
        <div className={`${show ? '' : 'hide translate-y-50'} fixed left-0 bottom-0 rounded-t-4xl wter tblack z-[21] w-full max-h-[85vh] overflow-y-auto`}>
            <div className="bg-white pb-5 rounded-t-4xl border-b border-black/10 pt-5">
               <div className="w90 relative pt-5">
                <i onClick={onClose} className="far fa-xmark py-1 px-3 absolute  top-0 right-0 rounded-full blue-sm "></i>
            </div>
            
            <div >
                <p className="my-5 text-lg px-3 font-medium">{title}</p>
                <div className="flex gap-5 v-center w90">
                    <Type
                    type={type}
                    />
                    <p className="tgray text-sm">{date}</p>
                    
                </div>
                
            </div> 
            </div>
            
            
            <div className="bg-white rounded-xl w90 my-10 border border-black/10">
                <div className="flex border-b border-black/10 gap-5 py-1 v-center w90">
                    <i className="far fa-bell text-xl tgray"></i>
                    <p className="tgray">Announcement</p>
                </div>
                {content}
            </div>
            
            <div className="rounded-xl w90 bg-white border border-black/10 my-5 py-3">
                <button onClick={onClose} className="text-sm font-medium blue w90 py-1.5 text-center rounded-lg shadow hgray ">Mark as Read</button>
            </div>
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