import {useState, useEffect} from 'react'
import {data, important, urgent, notice} from './announcementdata'
import Urgent from './Urgent'
import Important from './Important'
import Notice from './Notice'

export default function AnnouncementsHub() {

    const [active, setActive] = useState(0)
    const page = [<Urgent/>, <Important/>, <Notice/>]
    
    const [animate, setAnimate] = useState('opacity-0 translate-y-3 ')

    useEffect(() => {
        setAnimate('')
    }, [])

    return (
        <div>
            
            <div className={` ${animate} w90 flex center mt-10 rounded-full relative `}>
                
                <Button 
                text='Urgent'
                count={urgent.length}
                active={active === 0}
                className ="red"
                onClick={() => {
                    setActive(0)
                }}
                />
                
                <Button 
                text='Important'
                active={active === 1}
                className ="orange"
                count={important.length}
                onClick={() => {
                    setActive(1)
                }}
                />
                
                <Button 
                text='Notice'
                active={active === 2}
                className ="blue"
                count={notice.length}
                onClick={() => {
                    setActive(2)
                }}
                />
                

                
            </div>
            
            <div className={`${animate} my-10 `}>
                {page[active]}
            </div>
        </div>
        
    )
}

function Button({text, onClick, active, className, count}) {
    return (
        <div onClick={onClick} className={`${active ? `${className} z-10 font-medium border border-white` : 'bg-gray-100 tgray '} flex center gap-2 px-8 py-2 -mx-3 rounded-full`}> 
            <p>{text}</p>
            <p className={count > 0 ? 'font-semibold' : ''}>{count}</p>
        </div>
    )
}