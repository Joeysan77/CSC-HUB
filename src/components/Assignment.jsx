import {useState, useEffect} from 'react'
import AssignmentView from './AssignmentView'
import AnimatedContent from './animations/AnimatedContent'

export default function Assignment({subject, date, title, desc, due, dueDate, completed, subDate, content}) {

    const [showView, setShowView] = useState(false)
    const [animate, setAnimate] = useState('opacity-0 translate-y-3')

    let staCol;
    let icon;
    let dueText;
    let dueCheck;
    let dueDater;
    
    if (!completed && due ) {
        staCol = 'tred red-sm bred'
        icon='fa-calendar-exclamation'
        dueText = 'Due'
        dueCheck=dueDate
        dueDater='due:'
    } else if (!completed && !due) {
        staCol = 'torange orange-sm borange'
        icon="fa-calendar"
        dueText='Pending'
        dueCheck ="null"
        dueDater='due:'
    } else if (completed && !due) {
        staCol= 'tgreen2 green-sm bgreen2'
        icon="fa-calendar-check"
        dueText="Submitted"
        dueCheck=subDate
        dueDater='submitted:'
    } else {
        staCol=`red`
        icon="fa-home"
        dueText='wut'
        dueCheck='wut'
    }
    
    
    
    
    
    
    useEffect(() => {
        setAnimate('')
    });

    return (
    <>  
    
        <AssignmentView
        show={showView}
        subject={subject}
        date={date}
        title={title}
        dueText={dueText}
        dueCheck={dueCheck}
        icon={icon}
        content={content}
        staCol={staCol}
        onClose={() => {
            setShowView(false)
        }}
        />

        <div className={` ${animate} bg-white shadow w90 rounded-xl my-8 pb-3 border-black/10 border relative hsblue-sm `}>
            <div className="flex between border-black/10 border-b w90 py-1.5 v-center ">
                <p className="text-black/70 font-semibold">{subject}</p>
                <p className="text-sm tgray">{date}</p>
            </div>
            <div className="flex w90 v-center between py-5 gap-5 border-b border-black/10">
                <div>
                    <p className="font-medium my-2">{title}</p>
                    <p className="text-sm tgray">{desc}</p>
                </div>
                <div className="flex text-xs gap-1 v-center text-black/70">
                    <div className="flex gap-2 v-center">
                        <i className={`${staCol} ${icon} far  text-base px-1 rounded`}></i>
                        <p>{dueDater.slice(0, 3)}:</p>
                    </div>
                    <p>{dueCheck}</p>
                </div>
            </div>
            
            <div className="flex w90 mt-3 between">
                <div className={`${staCol} text-sm px-2 py-1 rounded-lg flex v-center gap-3`}>
                    <i className={`far ${icon} text-lg `}></i>
                    <p className="font-medium">{dueText}</p>
                    
                </div>
                
                <div
                onClick={() => {
                    setShowView(true)
                }}
                 className="blue hblue-lg px-3 py-1.5 center gap-3 flex rounded-lg font-medium shadow text-sm relative">
                    <p>View</p>
                    
                    <i className="fas fa-chevron-right text-sm"></i>
                </div>
            </div>
            
        </div>
      
    </>
    )
}
