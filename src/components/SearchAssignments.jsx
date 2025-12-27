import {useState} from 'react'

export default function SearchAssignments() {

    const [showDiv, setShowDiv] = useState(false)

    return (
    <>
    
        <SearchDiv
        show={showDiv}
        onClose={() => {
            setShowDiv(false)
        }}
        />
    
        <div>
            
            <div 
            onClick={() => {
                setShowDiv(true)
            } }
             className="flex v-center border border-black/50 hbblue w80 rounded-lg between mt-15 mb-10">
                <input className="px-5 py-1.5 outline-none "type="search" name="" id="" placeholder="Search Assignments..."/>
                <i className="fal fa-search px-2 py-1"></i>
            </div>
            
        </div>
    </>
    )
}

function SearchDiv({show, onClose}) {
    return (
        <div className={`${show ? '' : 'hide scale-90'} w-full  h-full fixed bg-white z-[20] top-0 left-0 border`}>
            
           <div className="shadow py-2">
               <div className="flex my-3 px-3 gap-8 v-center ">
                <i onClick={onClose} className="fal fa-arrow-left text-lg"></i>
                <div>
                    <input className="outline-none" type="search" name="" id="" placeholder="Search assignments"/>
                </div>
              </div>
            
            <div className="flex gap-5 v-center px-3 py-2">
                
                <Button 
                text="Pending"
                />
                
                <Button 
                text="Submitted"
                />
                
                <Button 
                text="Due"
                />
                
            </div>
            
           </div>
           
            
            
            
        </div>
    )
}

function Button({text}) {

    const [active, setActive] = useState(false)

    return (
        <div onClick={() => {
            setActive(prev => ! prev)
        }} className={` ${active ? 'blue' : 'tblue'} bblue border rounded-full px-3 py-1 font-medium`}>
            {text}
        </div>
    )
}