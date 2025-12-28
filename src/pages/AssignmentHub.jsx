import AssignmentList from '../components/AssignmentList'

export default function AssignmentHub() {
    return (
        <div>
           <div className="w90">
               <p className="text-2xl font-medium">Assignment Hub</p>
               <p className="text-black/50 text-sm my-3">View pending and submitted assignments with answers and deadlines.</p>
           </div>
           
           <div>
               <AssignmentList/>
           </div>
        </div>
    )
 }