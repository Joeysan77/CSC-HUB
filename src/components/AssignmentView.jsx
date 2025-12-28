import {useState, useRef} from 'react'
import Dark from './Dark'
import AssignmentDemo from './AssignmentDemo'

export default function AssignmentView({show, subject, date, onClose, title, content, icon, dueText, dueCheck, staCol}) {

    const [showDemo, setShowDemo] = useState(false)
    const scrollRef = useRef(null)
    
    return (
    <>
        
        <Dark
        show={show}
        zIndex='z-[20]'
        onClick={() => {
            onClose()
            setShowDemo(false)
        }}
        />
    
    
        <div ref={scrollRef} className={`w-full  pb-5 bottom-0 fixed z-[21] max-h-[85vh] ${show ? '' : 'hide translate-y-50'} wter shadow rounded-t-3xl overflow-y-auto `}>
            
           
            
            
         <div className="w-full white-md py-3 my-2 border-b border-black/10 rounded-t-3xl ">
              <div className="flex flex-end px-4">
                <i 
                onClick={() => {
                    onClose()
                    setShowDemo(false)
                }}
                 className="far fa-xmark bg-black/10  px-3 py-1.5 rounded-full ml-auto"></i>
            </div>
             <p className="font-medium text-lg w90">{title}</p>
             <p className="tgray w90">{subject}</p>
         </div>
     <div className="relative overflow-hidden" >
         <div className="border border-black/10 rounded-lg w90 my-3 white-md py-2 px-2 flex between">
             <div className="flex gap-2 v-center">
                 <i className={`${icon} far text-lg tgray`}></i>
                 <div className="flex text-black/70 gap-1 text-sm">
                     <p>{dueText}:</p>
                     <p>{dueCheck}</p>
                 </div>
                 
             </div>
             
             <div className={`${staCol} px-2 rounded text-sm font-medium flex center py-1`}>
                 <p>{dueText}</p>
             </div>
         </div>
         
         <div className="w90 white-md border border-black/10 rounded-lg">
             <div className="flex border-b border-black/10 px-3 gap-3 v-center py-2 ">
                 <i className="fa fa-ballot-check text-xl tgray"></i>
                 <p className="text-lg font-medium text-black/70">Instructions</p>
             </div>
             
             <div>
                 {content}
             </div>
         </div>
         
         <div className="w90 rounded-xl my-5 white-md border border-black/10 p-3">
             <div 
             onClick={() => {
                 setShowDemo(true)
                 scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
             }}
              className="blue text-center shadow rounded-lg py-1 font-medium relative"> 
                 
                 View Demo
             </div>
         </div>
         
         <AssignmentDemo
         show={showDemo}
         onClose={() => {
             setShowDemo(false)
         }}
         />
    </div>
        </div>
    </>
    )
}