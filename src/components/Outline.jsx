export default function Outline({courseCode, title1, desc1}) {
    return (
        <>
        
        <div className="my-10 shadow rounded-xl w90 border border-black/10 bg-white">
            <div className="flex w90 gap-5 v-center border-b border-black/10 py-2">
                <i className="far fa-file-lines tgray text-xl"></i>
                <p className="font-semibold text-lg">{courseCode}</p>
            </div>
            
            <div className="w90 py-3 border-black/10 border-b">
                <p className="font-medium">{title1}</p>
                <p className="text-sm tgray w90 my-2">{desc1}</p>
            </div>
            
            <div className="flex center py-3">
                <button className="flex v-center text-sm py-1.5 tblue px-3 rounded-lg mx-2 font-medium">View Full Course Outline <i className="far fa-arrow-right ml-3 text-lg"></i></button>
            </div>
            
        </div>
        
        
        </>
    )
}