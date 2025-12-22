import PendingAssignments from '../components/PendingAssignments'
import DueAssignments from '../components/DueAssignments'
import SubmittedAssignment from '../components/SubmittedAssignment'


export default function AssignmentHub() {
    return (
        <div>
            <div>
                  <p className="text-center text-3xl font-medium tpri">Assignment Hub</p>
                  
                  <p className="tgray-lg my-3 text-sm w60 text-center">View, track, and review all assignments</p>
            </div>
          
            <div className="flex v-center border border-black/50 hbblue w80 rounded-lg between mt-15 mb-10">
                <input className="px-5 py-1.5 outline-none "type="search" name="" id="" placeholder="Search Assignments..."/>
                <i className="fal fa-search px-2 py-1"></i>
            </div>
            
            <div>
                <div className="my-5">
                    <button className="shadow py-2 my-5 mx-3 px-3 rounded flex gap-3  ">
                        <i className="far fa-filter-list text-lg"></i> <p>Filter by Course Code</p>
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-x-5 gap-y-4 my-3 around w90">
 
                    <Course
                    text="MTH 101"
                    pending = {1}
                    />
                    
                    <Course
                    text="CHM 101"
                    pending={1}
                    />
                    
                     <Course
                    text="GST 111"
                    pending = {2}
                    />
                    
                    <Course
                    text="PHY 101"
                    pending={1}
                    />
                    
                     <Course
                    text="COS 101"
                    pending = {2}
                    />
                    
                    <Course
                    text="GST 211"
                    pending = {0}
                    />
                    
                    <Course
                    text="STA 111"
                    pending ={1}
                    />
                    
                    <Course
                    text="FRN 101"
                    pending={0}
                    />
                    
                    <Course
                    text="IGB 101"
                    pending={1}
                    />
                    
                </div>
            </div>
            
            <div className="line my-10 w80"></div>
            <DueAssignments/>
            <PendingAssignments/>
            <SubmittedAssignment/>
            
        </div>
    )
 }
 
 function Course({text, pending}) {
     return (
         <button className={`font-medium border border-black/20 rounded py-1.5 px-3.5 relative ${pending > 0 ? 'blue-xs' : ''} `}>
             <p className={pending > 0 ? 'tpri' : '' }>{text}</p>
             <div className="absolute -top-1 rounded-full -right-1 white">
                  <div className={` text-xs rounded-full ${pending > 0 ? 'blue-sm tblue' : 'gray-sm tgray-lg'} px-1 `}>{pending}</div>
             </div>
            
         </button> 
     )
 }