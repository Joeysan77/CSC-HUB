export default function AssignmentDemo({show, answers, onClose}) {
    return (
        <div className={`w-full h-full top-0 absolute left-0 ${show ? '' : ' translate-x-50 pointer-events-none opacity-0'} wter `}>
            <div className="flex gap-5 w90 v-center">
                <i onClick={onClose} className="far fa-arrow-left text-lg"></i>
                <p className="w90 text-lg font-medium">Answers</p>
            </div>
            
            
            <div className="w90 rounded-xl border border-black/10 py-2 white-md my-5">
                {answers ? answers : (
                    <p className="text-center tgray text-sm my-5">No Answers/Demo here</p>
                )}
            </div>
            
        </div>
    )
}
