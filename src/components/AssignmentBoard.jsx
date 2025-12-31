import {pendingAssignments, dueAssignments, submittedAssignments} from './assignmentdata'
import {Link} from 'react-router-dom' 

export default function AssignmentBoard() {
    return (
        <Link to="/assignment_hub" className="mb-10 ">
            
            
            
            <p className="text-center mt-18 mb-8 text-xl font-semibold">Assignments</p>
            
            <div className="border border-black/10 rounded-xl shadow w90 px-3 hsblue">
                
                <Detail
                icon="fa-calendar-exclamation tred"
                text="Due"
                count={dueAssignments.length}
                />
                
                <Detail
                icon="fa-calendar torange"
                text="Pending"
                count={pendingAssignments.length}
                />
                
                <Detail
                icon="fa-info-circle tblue"
                text="Submitted"
                count={submittedAssignments.length}
                />
                
            </div>
            
            <div className="line w90 my-10"></div>
            
        </Link>
    )
}

export function Detail({icon, text, count}) {
    return (
        <div className=" bg-white flex between v-center border px-3 border-black/10 py-2 rounded-lg my-5 shadow hsgold-sm">
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