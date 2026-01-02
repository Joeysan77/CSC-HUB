import {useState} from 'react'
import {Search} from './Utilities'
import {urgent} from './announcementdata'
import Announcement from './Announcement'
import {And} from './DataList'

export default function Urgent() {

     const [query, setQuery] = useState('')
     const [showDatalist, setShowDatalist] = useState(false)

     const filteredUrgent = urgent.filter(a =>
  `${a.title} ${a.date} ${a.desc}`
    .toLowerCase()
    .includes(query.toLowerCase())
);

    return (
    <>
    
        
    
        <div>
            
            <div className={` relative ${showDatalist ? 'mt-20' : ''} `}>
                
                <div className={`${showDatalist ? '' : 'hide'} absolute bottom-0 mb-15 bg-white w90 left-0 border border-black/20 shadow rounded-xl z-10 `}>
                    {filteredUrgent.map((a) => {
                        return (
                            <And
                            title={a.title}
                            desc={a.desc.slice(0, 40)}
                            date={a.date}
                            status={a.status}
                            onClick={() => {
                                setQuery(a.title)
                            }}
                            />
                        )
                    })}
                </div>
                
                <Search
            placeHolder='Search Urgent Announcements...'
            onChange={e => setQuery(e.target.value)}
            className={showDatalist ? 'mt-10' : ''}
            value={query}
            onClear={() => {
                setQuery('')
            }}
            isEmpty={query === ''}
            onFocus={() => {
                setShowDatalist(true)
            }}
            onBlur={() => {
                setTimeout(() => {
                    setShowDatalist(false)
                }, 200)
            }}
            />
            </div>
            
            
            <div className="flex between w90 v-center my-5">
                <p className="text-lg font-medium">Urgent Announcements</p>
                <Count
                type='Urgent'
                count={urgent.length}
                />
            </div>
            
            <div>
                {filteredUrgent.map((a) => {
                    return (
                        <Announcement
                        type={a.status}
                        title={a.title}
                        desc={a.desc}
                        date={a.date}
                        content={a.content}
                        />
                    )
                })}
                
                {filteredUrgent.length > 0 ? '' : (
                    
                    <div className="py-10 w90 flex center rounded gray-xs tgray text-sm border border-black/10 rounded-xl">
                        <p>
                            no data matches this query
                        </p>
                    </div>
                    
                )}
                
            </div>
            
        </div>
    </>
    )
}

function Count({count, type}) {

   let ty;
   let icon;

    if (type === 'Urgent') {
        ty = 'red-sm tred'
        icon='fa-exclamation-triangle'
    } else if (type === 'Important') {
        ty = 'orange-sm torange'
        icon='fa-bell-exclamation'
    } else if (type === 'Notice') {
        ty = 'blue-sm tblue'
        icon='fa-info-circle'
    }

    return (
        <div className={`${count > 0 ? ty : 'tgray gray-sm'} flex rounded v-center gap-2 py-1 px-2`}>
            <i className={`${icon} far text-lg `}></i>
            <p className={`${count > 0 ? 'font-semibold' : '' } `}>{count}</p>
        </div>
    )
}