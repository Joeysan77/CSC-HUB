export function Title({title, date, status}) {
    
    
    let sta;
    let staCol;
    
    if (status == 'urgent') {
        staCol = 'red-sm bred tred'
        sta = 'URGENT'
    } else if (status === 'important') {
        staCol = 'orange-sm torange borange'
        sta ="IMPORTANT"
    } else if (status === 'notice') {
        staCol = 'blue-sm tblue bblue'
        sta = 'NOTICE'
    }

    return (
        <div className="border-b border-black/10 mb-5 w90 py-3 relative">
            <p className="text-lg font-medium text-center pb-4 pt-10 ">{title}</p>
            <p className="tgray-lg text-sm px-3 text-center ">{date} </p>
            
            <div className="absolute top-0 -left-1 my-3 text-xs">
                <p className={`${staCol} py-1 border font-medium px-2 rounded`}>{sta}</p>
            </div>
        </div>
    )
}

export function List({num, item, desc}) {
    return (
        <div className="my-3 w90 rounded-xl border border-black/10 p-3">
           <div className="flex v-center w-full">
               <p className="font-semibold text-lg px-3">{num}</p>
            <p className="px-3 text-center font-medium my-1">{item}</p>
           </div> 
            <p className="text-sm tgray text-center">{desc}</p>
        </div>
    )
}