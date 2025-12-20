import {Link} from 'react-router-dom'


export default function AssignmentCard() {
    return (
        <div className="shadow rounded-xl w90 py-5">
            <img src="assignmentcard.png" className="w90 rounded-xl"alt=""/>
            <div className="flex between my-5 w90 v-center">
                  <p className="text-xl font-medium">Assignments Hub</p>
                  
                  <div className="flex center blue-sm tblue text-sm  px-1 rounded"><p>5+</p></div>
            </div>
            
            <p className="mt-5 tgray-lg text-center text-sm w80">
            View all pending and submitted assignments, check deadlines, and access provided answers in one place.
            </p>
           <Link to="/assignment_hub" className="w90 mt-8 blue py-2 font-medium flex center gap-5 rounded-lg">
               <p>View Assignments</p>
               <i className="fal fa-arrow-right"></i>
           </Link>
          
        </div>
    )
}