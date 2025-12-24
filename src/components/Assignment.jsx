import {useState} from 'react'
import DemoContainer from './DemoContainer'
import Dark from './Dark'


export default function Assignment({subject, content, date, completed, due, dueDate}) {

    const [showContainer, setShowContainer] = useState(false)

    return (
    <>
    
        <Dark
        show={showContainer}
        zIndex="z-[15]"
        onClick={() => {
            setShowContainer(false)
        }}
        />
        <DemoContainer
        show={showContainer}
        subject={subject}
        date={date}
        content={content}
        />
         
    
        <div className="border-b-[.5px] bgray w90 py-30 md:!w-[60%] md:!ml-[20%]">
            <div className="flex between px-3 v-center">
                <p className="tblue text-lg font-semibold">{subject}</p>
                <p className="tgray text-sm ">{date}</p>
            </div>
            
            <p>{content}</p>
            
            <div className="flex between text-xs px-3 my-5 v-center">
                <p className={` ${completed ? 'green-sm tgreen' : 'orange-sm torange'} px-2 py-1 font-medium rounded`}>{completed ? 'submitted' : 'pending'}</p>
                <div className="flex gap-2">
                    <p className="tpri font-medium">Due Date :</p>
                    <p className="">{due === null ? 'null' : `${dueDate}`}</p>
                </div>
            </div>
            <button 
             onClick={() => {
                 setShowContainer(true)
             }}
             className="w90 font-medium text-center blue rounded-lg py-1">View Demo</button>
        </div>
    </>
    )
}