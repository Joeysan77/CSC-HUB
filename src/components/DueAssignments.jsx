export default function DueAssignments() {
    return (
        <div className="rounded my-30 border border-black/20 w90">
            <div className="px-3 flex between v-center border-b border-black/20">
                <div className="tred flex gap-2 py-1">
                    <i className="far fa-exclamation-triangle"></i>
                    <p>Due Assignments</p>
                </div>
                <div className="flex center gray-sm tgray-lg px-1 rounded text-sm">
                    <p>0</p>
                </div>
            </div>
            
            <p className="my-5 w80 text-center text-sm tgray">There are no Assignments due as of <b> today</b></p>
        </div>
    )
}