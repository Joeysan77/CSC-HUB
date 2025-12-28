import {useState} from 'react'
import {Filter} from './Utilities'
import {assignments, pendingAssignments, submittedAssignments, dueAssignments} from './assignmentdata'
import AllAssignments from './AllAssignments'
import PendingAssignments from './PendingAssignments'
import SubmittedAssignments from './SubmittedAssignments'
import DueAssignments from './DueAssignments'

export default function AssignmentList() {

    const [active, setActive] = useState(0)

    const activeAssignment = [ <AllAssignments/>, <PendingAssignments/>, <SubmittedAssignments/>, <DueAssignments/>]

    return (
        <div>
            <div className="flex w90 center my-5 mt-10 border border-black/10 gray-xs rounded-lg ">
                
                <Filter 
                text="All"
                active={active === 0}
                onClick={() => {
                    setActive(0)
                }}
                />
                
                <Filter 
                text="Due"
                active={active === 3}
                onClick={() => {
                    setActive(3)
                }}
                />
                
                <Filter 
                text="Pending"
                active={active === 1}
                onClick={() => {
                    setActive(1)
                }}
                />
                
                <Filter 
                text="Submitted"
                active={active === 2}
                className="!border-r-none"
                onClick={() => {
                    setActive(2)
                }}
                />
            </div>
            
            
            <div>
               {activeAssignment[active]}
            </div>
        </div>
    )
}


