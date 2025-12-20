export default function Announcement() {
    return (
    <div>
        <div className="flex between text-sm w90 tpri-lg ">
            <p>Announcements Page</p>
            <i className="fal fa-arrow-right text-lg"></i>
        </div>
        <div className="mt-5 border rounded-lg border-black/20 w90 ">
            <div className="flex tpri-lg wfull between px-3 v-center border-b border-black/20 py-1">
                <div className="flex gap-2 v-center">
                    <i className="fal fa-exclamation-circle text-lg "></i><p>announcements</p>
                </div>
                
                <div className="tgray h-5 w-4 gray-sm flex center rounded py-1.5 px-1.5"><span className="tgray-md">0</span></div>
                </div>
            
            <p className="text-center text-sm tgray p-0 m-0 my-5 ">no announcements here</p>
        </div>
       <div className="line my-15 w90">
           
       </div>
    </div>
    )
}