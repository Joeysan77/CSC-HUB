import Dark from './Dark' 

export default function OutlineOverlay({show, onClose, courseCode, course, content, file}) {
    return (
        <>
        
        <Dark
        show={show}
        zIndex="z-[29]"
        onClick={onClose}
        />
        
        <div className={`bottom-0 fixed w-full left-0 z-30 rounded-t-4xl wter  ${show ? '' : 'hide translate-y-50'} max-h-[85%] overflow-y-auto `}>
            
            <div className="bg-white rounded-t-4xl pt-4 pb-2 border-black/10 border-b">
                <div className="flex between w90 v-center">
                     <p className="font-semibold text-lg">{courseCode}</p>
                     <i onClick={onClose} className="fa fa-xmark px-3 py-2 rounded-full blue-sm"></i>
                </div>
                <div className="w90 text-black/50 mt-5 flex between v-center ">
                    <p>{course}</p>
                    <div className="text-sm flex v-center rounded-lg tblue blue-sm px-3 gap-3 py-1.5 font-medium">
                        <i className="far fa-snowflake text-base"></i>
                        <p>Harmattan Semester</p>
                    </div>
                </div>
               
            </div>
            
            <div className="w90 pb-5 bg-white rounded-xl my-5 border border-black/10">
                 <div className="flex border-b border-black/10 py-2  between px-5 v-center">
                    <div className="flex gap-3 v-center">
                        <i className="far fa-file-lines tgray text-xl"></i>
                        <p className="text-black/70 font-medium text-lg">Course Outline</p>
                    </div>
   <div></div>                 
                </div>
                   {content}
               </div>
            <div className="border border-black/10 bg-white w90 rounded-xl my-10 py-3">
                
                {file ? (
                     <a
                href={file}
                download={`${courseCode} by King Jayyyy`}
                
                 className="blue rounded-lg hblue-md active:scale-90 flex font-medium text-sm center gap-5 w90 shadow py-2">
                    <p>Download {courseCode} PDF </p>
                    <i className="far fa-download text-lg -mt-1"></i>
                </a>
                ) : (
                    <div className="py-2">
                        <p className="tred text-center font-medium">File Not Available</p>
                    </div>
                )}
               
            </div>
        </div>
        
        
        </>
    )
}
