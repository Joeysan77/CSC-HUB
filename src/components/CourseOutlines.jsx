import {courses} from './courseoutlinesdata'
import Outline from './Outline'

export function AllCourses() {
    return (
        <div>
            {courses.map((c) => {
                return (
                    <Outline
                    courseCode={c.courseCode}
                    title1={c.title1}
                    desc1={c.desc1}
                    course={c.course}
                    content={c.content}
                    file={c.file}
                    />
                )
            })}
            
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 my-5 rounded-xl w90 ">
  <p className="text-sm text-gray-800 px-3">
    <i className="fa fa-exclamation-triangle torange text-lg mx-1"></i> <span className="text-lg font-semibold">Disclaimer :</span> <p className="py-2 text-center">The files, timetables, and documents provided on this page are for <b>educational and reference purposes only</b>. 
    While every effort is made to ensure accuracy, we do not guarantee that the information is complete, up-to-date, or error-free. 
    Users are responsible for <b>verifying information</b> and using the content at their own discretion. 
    Unauthorized distribution or commercial use is prohibited.</p>
  </p>
</div>
        </div>
    )
}
