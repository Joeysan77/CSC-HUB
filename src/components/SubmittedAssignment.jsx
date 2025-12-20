export default function SubmittedAssignment() {
    return (
        <div>
        <div className="my-20 border rounded-lg border-black/20 w90 ">
            <div className="flex tgreen wfull between px-3 v-center border-b border-black/20 py-1">
                <div className="flex gap-2 v-center">
                    <i className="fal fa-exclamation-circle text-lg "></i><p>Submitted Assignments</p>
                </div>
                
                <div className="tgray h-5 w-4 gray-sm flex center rounded py-1.5 px-1.5"><span className="tgray-md">0</span></div>
                </div>
            
            <p className="text-center text-sm tgray p-0 m-0 my-5 ">there are no submitted assignments here</p>
        </div>
       
        </div>
    )
}
