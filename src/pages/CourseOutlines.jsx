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
            
            
        </div>
    )
}