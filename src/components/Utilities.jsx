import {useState} from 'react'

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
          <div className="flex between px-3 v-center">
              <p className="w-[15%] text-lg font-semibold">{num}</p>
              <div className="flex flex-col center w-[85%] gap-y-2">
                  <p className="font-medium">{item}</p>
                  <p className="text-sm tgray">{desc}</p>
              </div>
          </div>
        </div>
    )
}

export function Filter({className, text, count, active, onClick}) {
    return (
        <div onClick={onClick} className={`${className} htblue flex flex-1 v-center px-5 text-sm border-r-[.5px]  border-r-black/10 py-1 px-5 ${active ? 'tblue blue-xs font-medium border-b-2 ' : 'text-black/70'}`}>
            <p>{text}</p>
            
        </div>
    )
}

export function Count({icon, count, type }) {
    return (
        <div className={`${count > 0 ? type : 'tgray gray-sm'} flex   rounded center gap-3 px-2 py-1 hover:scale-110 hover:shadow  `}>
            <i className={`${icon} far `}></i>
            <p className="text-sm font-medium">{count}</p>
        </div>
    )
}

export function Search({value, ref, placeHolder, div, onChange, onFocus, onBlur, onClear, isEmpty}) {

    const [hover, setHover] = useState(false)

    return (
         <div className={`w90 !md:w-[60%] md:ml-[20%] ${hover ? ' border-2 bblue-md sblue-xs' : ' border border-black/10'} shadow rounded-lg flex bg-white v-center px-2 my-3 py-1 ${div}   hbblue-md`} >
                <i onClick={onClear} className={`far ${hover && !isEmpty ? 'tblue scale-110 rotate-90 fa-xmark px-2 ' : (!hover && !isEmpty ? 'tblue scale-110 rotate-90 fa-xmark px-2' : (hover && isEmpty ? 'tblue scale-110 rotate-90 fa-xmark px-2' : 'fa-search tgray') )} `}></i>
                <input value={value} 
                onFocus={() => {
                    setHover(true)
                    onFocus()
                }} 
                onBlur={() => {
                    setHover(false)
                    onBlur()
                }} onChange={onChange} ref={ref} className="py-1 px-2 text-sm outline-none w-full" type="search" name="" id="" placeholder={placeHolder}/>
            </div>
    )
}

export function NoData({data}) {
    return (
    <>
        {data ? (
            <div className={`w90 bg-white border border-black/10 shadow py-8 flex center rounded-xl`}>
                <p className="text-sm text-center tgray">
                    no data/assignments matches this query
                </p>
            
        </div>
        ) : ''}
     </>
    )
}


export function Select({placeHolder, onClick}) {

    const [isFocused, setIsFocused] = useState(false)

    return (
    <div>
        <div 
        className={` flex center  gap-3 border border-black/10 rounded-lg shadow bg-white py-2 px-2 ${isFocused ? 'sblue-xs bblue-md border-2' : '' }`}
        onBlur={() => {
            setIsFocused(false)
        }}
        onClick={() => {
            setIsFocused(prev => !prev)
            onClick()
        }}
        tabIndex={0}
        >
            <p className="text-sm text-black/60">{placeHolder}</p>
            <i className={`fas text-xs fa-chevron-down ${isFocused ? 'rotate-90 tblue' : 'tgray'}`}></i>
        </div>
    </div>
    )
}