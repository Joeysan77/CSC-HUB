import {useState} from 'react'
import DemoContainer from './DemoContainer'
import Dark from './Dark'

export default function CourseAssignment({completed, date, content, dueDate, subject}) {

    const [showDemo, setShowDemo] = useState(false)

    return (
    <>
    
    <Dark
    show={showDemo}
    onClick={() => {
        setShowDemo(false)
    }}
    />
    
    <DemoContainer 
    show={showDemo}
    subject={subject}
    content={content}
    date={date}
    />
    
        <div className="border-black/10 border w90 p-3 rounded-xl my-8">
            <div className="flex between v-center">
                <p className={`text-sm ${completed ? 'tgreen2' : 'tpri'} py-1 px-2 rounded `}>{completed ? 'Submitted on :' : `due on : ${dueDate.length > 1 ? `${dueDate}` : 'not stated' }`}</p>
                <p className="tgray">{date}</p>
            </div>
            
            <div className="my-5 py-2">{content}</div>
            
            <div className="flex gap-3">
                <div className={`${!completed ? 'orange-sm torange' : 'green-sm tgreen2'} flex-1 px-2 rounded-lg py-1.5 text-center`}>{completed ? 'Submitted' : 'Pending'}</div>
                <div
                onClick={() => {
                    setShowDemo(true)
                }}
                 className="text-center flex-4 rounded-lg blue py-1.5">View demo</div>
            </div>
        </div>
    </>
    )
}
