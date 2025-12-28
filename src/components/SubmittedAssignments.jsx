import {useState} from 'react'
import {Count, Search, NoData} from './Utilities'
import {assignments, pendingAssignments, submittedAssignments, dueAssignments} from './assignmentdata'
import Assignment from './Assignment'

export default function SubmittedAssignments() {

    const [query, setQuery] = useState('')

    const counts = [
        {
            icon: 'fa-calendar-check',
            count: submittedAssignments.length,
            type: 'green-sm tgreen2'
        }
    ]
    
    const filteredAssignments = submittedAssignments.filter(assignment =>
  `${assignment.subject} ${assignment.date} ${assignment.contentText}`
    .toLowerCase()
    .includes(query.toLowerCase())
);

    return (
        <div>
            <div className="flex w90 between my-10">
                <p className="font-medium text-lg text-black/70">Submitted Assignments</p>
                <div className="flex gap-3">
                    {counts.map((c) => {
                        return (
                            <Count
                            type={c.type}
                            count={c.count}
                            icon={c.icon}
                            />
                        )
                    })}
                </div>       
            </div>
            
           
            
            <div >
                
                
                <Search
                   placeHolder='Search Submitted Assignments'
                   div='mt-8'
                   onChange={e => setQuery(e.target.value)}
           
           />
                <div className="md:w-[60%] md:ml-[20%]">
                    {filteredAssignments.map((a) => {
                     return (
                         <Assignment
                         subject={a.subject}
                         date={a.date}
                         title={a.title}
                         desc={`${a.contentText.slice(0, 60)}... `}
                         due={a.due}
                         dueDate={a.dueDate}
                         completed={a.completed}
                         subDate={a.subDate}
                         content={a.content}
                         />
                     )
                 })}
                </div>
                 
           </div>
           
           <NoData
           data={filteredAssignments.length === 0}
           />
            
        </div>
    )
}

