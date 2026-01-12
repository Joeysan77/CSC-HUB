import {pendingAssignments, dueAssignments, submittedAssignments} from './assignmentdata'
import {Link} from 'react-router-dom' 
import {useContext} from 'react'
import {AppContext} from '../App'

export default function AssignmentBoard() {

    const {asindex, setAsindex} = useContext(AppContext)

    return (
    <div className="w-[95%] ml-[2%] md:w-[40%]">
        <Link to="/assignment_hub" className="mb-10 ">
            
            
            
            <p className="text-center mt-18 mb-8 text-xl  font-semibold">Assignments</p>
            
            <div className="border border-black/10 rounded-xl shadow w90 px-3 py-4 hsblue">
                
                <Detail
                icon="fa-calendar-exclamation tred"
                text="Due"
                count={dueAssignments.length}
                onClick={() => {
                    setAsindex(3)
                }}
                />
                
                <Detail
                icon="fa-calendar torange"
                text="Pending"
                count={pendingAssignments.length}
                onClick={() => {
                    setAsindex(1)
                }}
                />
                
                <Detail
                icon="fa-info-circle tblue"
                text="Submitted"
                count={submittedAssignments.length}
                onClick={() => {
                    setAsindex(2)
                }}
                />
                
            </div>
            
            <div className="line w90 my-10"></div>
            
        </Link>
     
     </div>
    )
}

export function Detail({icon, text, count, onClick}) {
    return (
        <div onClick={onClick}
        
         className=" bg-white flex between v-center border px-3 border-black/10 py-3  rounded-lg my-3 shadow hsgold-md">
            <div className="v-center flex gap-3">
                <i className={`${icon} fas text-xl `}></i>
                <p className="font-medium text-black/80">{text}</p>
            </div>
            <div className="flex w-5 center">
                <p className={` ${count === 0 ? 'tgray' : ''} text-xl font-semibold `}>{count}</p>
            </div>
        </div>
    )
}
