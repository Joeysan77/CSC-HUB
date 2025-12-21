import Dark from './Dark'

export default function AnnouncementOverlay({show, title, date, onClose, content}) {
    return (
        <>
          <Dark
          show={show}
          zIndex="z-[16] left-0"
          onClick={onClose}
          />
            
          <div className={`${show ? '' : 'hide scale-90' } fixed left-0 w90 max-h-[75vh] overflow-y-auto rounded-xl bg-white/80 top-20 w90 z-[17] shadow-lg`}>
              
                
              
                    <i onClick={onClose} className="far fa-xmark text-lg py-1 mx-3"></i>
                <div className="shadow py-2">
                    <p className="uppercase py-2 font-medium text-center text-xl">{title}</p>
                    <p className="text-sm tgray mx-4">{date}</p>
                </div>
                
                <div className="w90 py-5">{content}</div>
                
               
                
          </div>
        </>
    )
}