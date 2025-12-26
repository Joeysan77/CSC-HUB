import {useState} from 'react'
import CourseView from './CourseView'
import Dark from './Dark'


export default function Course({text, count, cors}) {

    const [showCourseView, setShowCourseView] = useState(false)

    return (
    <>
    
        <Dark
        show={showCourseView}
        zIndex="z-[15] "
        onClick={() => {
            setShowCourseView(false)
        }}
        />
        
        <CourseView
        show={showCourseView}
        course={text}
        cors={cors}
        onClose={() => {
            setShowCourseView(false)
        }}
        />
    
        <div
        onClick={() => {
            setShowCourseView(true)
        }}
         className={`${count >= 1 ? 'bblue blue-xs' : 'bgray-lg'} border relative rounded px-2 py-1.5 font-medium`}>
            {text}
            
            <div className={`text-xs absolute -top-1.5 -right-1.5 rounded px-1.5 ${count >= 1 ? 'blue' : 'gray' }`}>
                <p>{count}</p>
            </div>
        </div>
    </>
    )
}