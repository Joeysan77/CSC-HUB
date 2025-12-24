export default function DemoContainer({subject, show, date, content}) {
    return (
        <div className={` top-1/2 left-1/2 transform -translate-x-1/2 w-[90%] overflow-y-auto -translate-y-1/2 max-h-[75vh] top-0 left-0 fixed bg-white ${show ? ' ' : 'hide scale-90'} z-[18] rounded-lg shadow-lg`}>
            <div className="border-b border-black/10 ">
                <p className="tblue text-xl text-center font-semibold my-3">{subject}</p>
                <p className="text-sm absolute top-2 right-2 tgray">{date}</p>
            </div>
            <div>{content}</div>
            <p className="tblue text-lg font-medium border-b-2 w90 bblue text-center my-5 py-3 uppercase">Answers/Demo</p>
            <div>
                <p className="my-5 text-center tgray">not available</p>
            </div>
        </div>
    )
}