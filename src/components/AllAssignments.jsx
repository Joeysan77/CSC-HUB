import {useState, useEffect} from 'react'
import {Count, Search, NoData} from './Utilities'
import {assignments, pendingAssignments, submittedAssignments, dueAssignments} from './assignmentdata'
import Assignment from './Assignment'
import {Asd} from './DataList'

export default function AllAssignments() {

    const [query, setQuery] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [animate, setAnimate] = useState('opacity-0 translate-y-3')
    const [showDatalist, setShowDatalist] = useState(false)

    const counts = [
        {
            icon: 'fa-calendar',
            count: pendingAssignments.length,
            type:'orange-sm torange'
        },
        
        {
            icon: 'fa-calendar-exclamation',
            count: dueAssignments.length,
            type: 'red-sm tred'
        },
        
        {
            icon: 'fa-calendar-check',
            count: submittedAssignments.length,
            type: 'green-sm tgreen2'
        }
    ]
    
    useEffect(() => {
        setAnimate('')
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setQuery(inputValue)
        }, 200)
    }, [inputValue])
    
   
    
    const filteredAssignments = assignments.filter(assignment =>
  `${assignment.subject} ${assignment.date} ${assignment.contentText} ${assignment.title}`
    .toLowerCase()
    .includes(query.toLowerCase())
);

    return (
        <div className={animate}>
            <div className="flex w90 between my-10">
                <p className="font-medium text-lg text-black/70">All Assignments</p>
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
                
                <div className="relative">
                    
                    <div className={`absolute bottom-0 mb-15 bg-[#f0f1f3] w90 rounded-xl shadow-xl border border-black/20 max-h-[40vh] overflow-y-auto ${showDatalist ? '' : 'opacity-0 pointer-events-none translate-y-3 '} ${animate}`}>
                        {filteredAssignments.map((a) => {
                            return (
                                <Asd
                                 title={a.title}
                                 date={a.date}
                                 subject={a.subject}
                                 desc={a.contentText.slice(0, 30)}
                                 status={a.status}
                                 due={a.due}
                                 completed={a.completed}
                                 content={a.content}
                                 dueDate={a.dueDate}
                                 subDate={a.subDate}
                                 onClick={() => {
                                     setInputValue(a.title.toLowerCase())
                                 }}
                                />
                            )
                        })}
                        
                       {filteredAssignments.length > 0 ? ' ' : (
                           <div className=" text-xs flex center p-4 tgray">
                               <p>no data/assignments matches this query</p>
                           </div>
                       )}
                       
                    </div>
                
                    
                
                <Search
                   placeHolder='Search All Assignments'
                   div='mt-8'
                   onChange={(e) => setInputValue(e.target.value)}
                   value={inputValue}
                   div={showDatalist ? 'mt-30' : ''}
                   onFocus={() => {
                       setShowDatalist(true)
                   }}
                   onBlur={() => {
                       setTimeout(() => {
                           setShowDatalist(false)
                       }, 200)
                   }}
           
           />
               </div>
               
               
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

