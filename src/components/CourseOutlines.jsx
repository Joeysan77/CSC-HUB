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
                    size={c.size}
                    />
                )
            })}
            
           
        </div>
    )
}


