import {useState, useRef} from 'react'
import Assignment from './Assignment'
import {dueAssignments} from './data'

export default function DueAssignments() {

    let asLength;
    asLength = dueAssignments.length;

    const [query, setQuery] = useState('')
    const inputRef= useRef(null)
    
    const filteredAssignments = dueAssignments.filter(assignment =>
    `${assignment.subject} ${assignment.date} ${assignment.due} ${assignment.contentText}`
    .toLowerCase()
    .includes(query.toLowerCase())
)

    return (
        <div className="border-y border-black/10 w90  my-20">
            <div className=" border border-black/20 hbblue rounded-lg my-5 flex between v-center">
                <input 
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                ref={inputRef}  className="px-3 py-1 outline-none w-90" type="search" name="" id="" placeholder="Search Due Assignments..."/>
                <i className="fal fa-search text-lg px-2"></i>
            </div>
            
            <div className="border border-black/20 rounded-lg">
                <div className="border-b border-black/20 flex between px-2 v-center">
                    <div className="flex torange gap-2 py-1">
                       <i className="far fa-exclamation-triangle"></i> 
                       <p>Due Assignments</p>
                    </div>
                    <div className={`${asLength >= 1 ? 'tblue blue-sm' : 'tgray gray-sm'} flex center px-1 rounded`}>
                        <p>{asLength}</p>
                    </div>
                </div>
                
                <div>
                    {filteredAssignments.map((assignment) => {
                        return (
                            <Assignment 
                            subject = {assignment.subject}
                            date = {assignment.date}
                            due = {assignment.due}
                            content = {assignment.content} 
                            completed = {assignment.completed}
                            />
                        )
                    })}
                </div>
                
                {filteredAssignments.length === 0 ? 
                <div className="my-3 text-center tgray text-sm w90">
                    no assignments matches this query <br/> 
                    or <br/>
                    
                    there are no due assignments as of <b>today</b>
                </div> : ''}
                
            </div>
            
        </div>
    )
}