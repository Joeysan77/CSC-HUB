import {useState} from 'react'
import {AllCourses} from '../components/CourseOutlines'
import {Search, Select} from '../components/Utilities'

export default function CourseOutlines() {

    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            
            <div className="flex w90 between v-center">
                <p className="text-2xl font-medium">Course Outlines</p>
                <i className={`fas fa-file-lines text-2xl tgray`}></i>
            </div>
            
            <p className="w90 tgray my-3">
                Access detailed syllabi and learning objectives for your Department courses.
            </p>
            
            
            <div className="flex v-center gap-3 my-10">
                <div>
                    <Search
                isEmpty={inputValue === ''}
                placeHolder="Search Course Outlines..."
                />
                </div>
                
                
                <div>
                    <Select
                placeHolder='All Courses'
                />
                </div>
                
                    
                
                
                
            </div>
            
            <div>
                <AllCourses/>
                
            </div>
            
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
