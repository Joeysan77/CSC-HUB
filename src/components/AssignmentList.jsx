import {useState, useContext} from 'react'
import {Filter} from './Utilities'
import {assignments, pendingAssignments, submittedAssignments, dueAssignments} from './assignmentdata'
import AllAssignments from './AllAssignments'
import PendingAssignments from './PendingAssignments'
import SubmittedAssignments from './SubmittedAssignments'
import DueAssignments from './DueAssignments'
import { motion, AnimatePresence } from 'framer-motion'
import {AppContext} from '../App'


export default function AssignmentList() {

    const {asindex, setAsindex} = useContext(AppContext)

    const activeAssignment = [ <AllAssignments/>, <PendingAssignments/>, <SubmittedAssignments/>, <DueAssignments/>]

    return (
        <div>
            <div className="flex w90 center my-5 mt-10 border border-black/10 gray-xs rounded-lg ">
                
                <Filter 
                text="All"
                active={asindex === 0}
                onClick={() => {
                    setAsindex(0)
                }}
                />
                
                <Filter 
                text="Due"
                active={asindex === 3}
                onClick={() => {
                    setAsindex(3)
                }}
                />
                
                <Filter 
                text="Pending"
                active={asindex === 1}
                onClick={() => {
                    setAsindex(1)
                }}
                />
                
                <Filter 
                text="Submitted"
                active={asindex === 2}
                className="!border-r-none"
                onClick={() => {
                    setAsindex(2)
                }}
                />
            </div>
            
            
            <AnimatePresence> 
               {activeAssignment[asindex]}
            </AnimatePresence>
        </div>
    )
}


