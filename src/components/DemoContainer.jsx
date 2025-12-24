export default function DemoContainer({subject, show, date, content}) {
    return (
        <div className={`w90 my-10 max-h-[75vh] overflow-y-auto top-0 left-0 fixed bg-white ${show ? ' ' : 'hide scale-90'} z-[18] rounded-lg shadow-lg`}>
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