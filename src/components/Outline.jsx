import {useState} from 'react'
import OutlineOverlay from './OutlineOverlay'


export default function Outline({courseCode, title1, desc1, course}) {

    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <>
        
        <OutlineOverlay
        show={showOverlay}
        courseCode={courseCode}
        course={course}
        onClose={() => {
            setShowOverlay(false)
        }}
        />
        
        
        <div className="my-10 shadow rounded-xl w90 border border-black/10 bg-white">
            <div className="flex w90 gap-5 v-center border-b border-black/10 py-2">
                <i className="far fa-file-lines tgray text-xl"></i>
                <p className="font-semibold text-lg">{courseCode}</p>
            </div>
            
            <div className="w90 py-3 border-black/10 border-b">
                <div>
                    <p className="text-lg my-2 font-semibold">1.</p>
                      <p className="font-medium">{title1}</p>
                </div>
              
                <p className="text-sm tgray w90 my-2">{desc1}</p>
            </div>
            
            <div 
             onClick={() => {
                 setShowOverlay(true)
             }}
             className="flex center py-3 ablack-xs">
                <button className="flex v-center text-sm py-1.5 tblue px-3 rounded-lg mx-2 font-medium">View Full Course Outline <i className="far fa-arrow-right ml-3 text-lg"></i></button>
            </div>
            
        </div>
        
        
        </>
    )
}