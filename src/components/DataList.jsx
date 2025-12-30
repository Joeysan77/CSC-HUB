import {useState, useEffect} from 'react'
import AssignmentView from './AssignmentView'

export function Asd({content, title, subject, desc,date, due, completed, onClick}) {

    

    return (
    <>
   
    
        <div 
        onClick={onClick}
         className="mx-3 my-3 border-b border-black/20 bg-white rounded-lg shadow">
            <div className="flex between py-1 border-black/10 border-b px-3">
                <div className="flex gap-8">
                    <p className="font-semibold text-xs ">{subject}</p>
                     <p className="tgray text-xs">{date}</p>
               
                </div>
                   
                   <div className={`${due ? 'tred' : (completed ? 'tgreen2' : 'torange')} text-xs font-medium `}>
                       {due ? 'Due' : (completed ? 'Submitted' : 'Pending' )}
                   </div>  
               
               
            </div>
            
            <div className="flex w90 py-2">
                <div>
                   <p className="font-medium text-sm">{title}</p>
                   <p className="text-xs text-black/50">{desc}...</p>
                </div>
            
           </div>
            
        </div>
    </>
    )
}

export function And({date, title, desc, status, onClick}) {
    return (
        <div onClick={onClick} className="w90 rounded-lg shadow border border-black/10 my-3 bg-white ">
            
            <div className=" flex between px-3 v-center border-b border-black/10 py-1">
                <p className="text-sm tgray">{date}</p>
                <p className={`${status === 'important' ? 'torange orange-sm' : (status === 'urgent' ? 'tred red-sm' : 'tblue blue-sm' )} rounded-lg text-sm px-3 capitalize font-medium`}>{status}</p>
            </div>
            
            <div className="w90 pr-15 my-2">
                <p className="font-medium text-sm">{title}</p>
                <p className="text-sm tgray ">{desc}</p>
            </div>
        </div>
    )
}