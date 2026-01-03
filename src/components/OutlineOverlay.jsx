import Dark from './Dark' 

export default function OutlineOverlay({show, onClose, courseCode, course}) {
    return (
        <>
        
        <Dark
        show={show}
        zIndex="z-[29]"
        onClick={onClose}
        />
        
        <div className={`bottom-0 fixed w-full left-0 z-30 rounded-t-4xl wter  ${show ? '' : 'hide translate-y-50'} `}>
            
            <div className="bg-white rounded-t-4xl py-4">
                <div className="flex between w90 v-center">
                     <p className="font-semibold text-lg">{courseCode}</p>
                     <i className="fa fa-xmark px-3 py-2 rounded-full blue-sm"></i>
                </div>
                <div>
                    <p>{course}</p>
                </div>
               
            </div>
            
        </div>
        
        
        </>
    )
}