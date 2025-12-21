import Dark from './Dark'

export default function AnnouncementOverlay({show, title, date, onClose, content, status}) {

    let sta;
    let icon
    let iconCol
    
    if (status === 'urgent') {
        sta = 'bred'
        icon = 'fa-triangle-exclamation'
        iconCol="tred"
    } else if (status === 'important') {
        sta = 'borange'
        iconCol ="torange"
        icon = 'fa-triangle-exclamation'
    } else if (status === 'notice') {
        sta = 'bblue'
        icon="fa-circle-info"
        iconCol="tblue"
    }
    
    


    return (
        <>
          <Dark
          show={show}
          zIndex="z-[16] left-0"
          onClick={onClose}
          />
            
          <div className={`${show ? '' : 'hide scale-90' } fixed left-0 w90 max-h-[75vh] overflow-y-auto rounded-xl bg-white/80 top-20 w90 z-[17] shadow-lg `}>
              
                <div className={` ${sta} rounded-t-lg border-t-4`}>
              
                    <i onClick={onClose} className="far fa-xmark text-lg py-1 mx-3"></i>
                <div className="shadow py-2">
                    <i className={`far ${icon} text-center w50 text-3xl mb-3 absolute top-3 ${iconCol}`}></i>
                    <p className="uppercase py-3 font-medium text-center text-xl">{title}</p>
                    <p className="text-sm tgray-lg mx-4">{date}</p>
                </div>
               </div>
                <div className="w90 py-5">{content}</div>
                
               
                
          </div>
        </>
    )
}