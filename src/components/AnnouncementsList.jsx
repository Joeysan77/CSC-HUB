import {useState} from 'react'
import {Title, List} from './Utilities'
import AnnouncementOverlay from './AnnouncementOverlay'


export function PhysicalClearance() {

    const [showOverlay, setShowOverlay] = useState(false)

    let title = 'Physical Clearance Documents'
    let date = 'Mon, 3rd Nov 2025'
    let desc = 'All students are reminded to prepare and submit the required documents for physical clearance. Ensure that all documents are complete and accurate befo...'
    let status='important'
    
    return (
    <>
    
        <AnnouncementOverlay
         show={showOverlay}
         title={title}
         date={date}
         status={status}
         onClose={() => {
             setShowOverlay(false)
         }}
         content={
             <>
             <p className="my-2 w90 text-black/70 text-center">
                 Physical clearance for the <b> Computer Science Department</b> takes place only on <b>Tuesdays</b>.<br/><br/> Students are advised to attend strictly on the approved day, as clearance will not be conducted on other days.<br/><br/>
Collection of CSC 22 forms will be done only on <b>Fridays</b>.<br/><br/>
Students are to come along with the following documents for clearance arranged in this manner:

             </p>
             
             <div className="my-10">
                 <List
                 num="1"
                 item="Jamb Original Result Slip"
                 desc="1 original copy"
                 />
                 
                 <List
                 num="2"
                 item="Duplicate of JAMB Admission letter"
                 desc="1 original copy"
                 />
                 
                 <List
                 num="3"
                 item="FUTO PUTME application slip"
                 desc="1 photocopy"
                 />
                 
                 
                 <List
                 num="4"
                 item="FUTO PUTME screening Result slip"
                 desc="1 original copy"
                 />
                 
                 
                 <List
                 num="5"
                 item="O-Level Statements of result"
                 desc="1 original copy"
                 />
                 
                 <List
                 num="6"
                 item="Confirmation of Admission slip"
                 desc="1 original copy & 1 photocopy"
                 />
                 
                 <List
                 num="7"
                 item="FUTO Admission Letter"
                 desc="3 original copies" 
                 />
                 
                 <List
                 num="8"  
                 item="Development Levy reciept"
                 desc="1 photocopy"
                 />
                 
                 <List
                 num="9"
                 item="School Fees reciept"
                 desc="1 photocopy"
                 /> 
                 
                 <List
                 num="10"
                 item="Candidate Profile slip"
                 desc="1 original copy"
                 />
                 
                 <List
                 num="11"
                 item="Original Validity Form with Passport"
                 desc="3 original copies"
                 />
                 
                 <List
                 num="12"
                 item="Signed Acceptance Letter"
                 desc="3 photocopies"
                 />
                 
                 <List
                 num="13"
                 item="Student Information Form"
                 desc="3 original copies"
                 />
                 
                 <List
                 num="14"
                 item="Undertaking Form"
                 desc="3 photocopies"
                 />
                 
                 <List
                 num="15"
                 item="Birth Certificate"
                 desc="1 photocopy"
                 />
                 
                 <List
                 num="16"
                 item="Local Govt Certification Letter"
                 desc="1 photocopy"
                 />
                 
                 <List
                 num="17"
                 item="NIN slip or certificate"
                 desc="1 photocopy"
                 />
                 
                 <List
                 num="18"
                 item="Direct Entry Candidates: OND/HND/Degree statement of results (for direct entry candidates only)"
                 desc="1 original copy"
                 />
                     
             </div>
             <p className="my-2 w90 text-black/70 text-center">Ensure that all documents are complete and properly arranged before coming, as incomplete documents may delay your clearance.</p>
             </>
         }
         />
    
        <div className="my-5 w90 rounded-xl border border-black/10">
         <Title
         title={title}
         date={date}
         status={status}
         />
         
         <p className="w90 my-3 text-sm text-black/60 text-center px-3">{desc}</p>
         
         <p onClick={() => {
           setShowOverlay(true)  
         }}
          className="tblue text-sm my-3  font-medium mx-5">Read more...</p>
         
         
        </div>
    </>
    )
}


export function DepartmentalClearanceDeadline() {

    const [showOverlay, setShowOverlay] = useState(false)

    let title = 'Departmental Clearance Deadline'
    let date = 'Mon, 17th Nov 2025'
    let desc = "The Department has observed that out of close to 300 students, only 15 students have completed their departmental clearance.   Studen..."
    let status = 'urgent'
    
    return (
    <>
    
        <AnnouncementOverlay
         show={showOverlay}
         title={title}
         date={date}
         onClose={() => {
             setShowOverlay(false)
         }}
         status={status}
         content={
             <>
             
             <p className="w90 text-black/70 text-center my-5">
                 The Department has observed that out of close to <b>300</b> students, only <b>15</b> students have completed their departmental clearance.<br/><br/>
Students are hereby informed that the deadline for departmental clearance has been moved forward to <b>Wednesday, 17/12/25</b>.<br/> Any student who fails to complete the clearance process on or before this date should be prepared to pay <b>additional charges or penalties for late clearance</b>.<br/><br/>
Please note that without completing your departmental clearance, you are not yet recognized as a <b>Computer Science (CSC) student</b>.<br/><br/>
All concerned students are advised to take this information seriously and act immediately.
             </p>
             </>
         }
         />
    
        <div className="my-5 w90 rounded-xl border border-black/10">
         <Title
         title={title}
         date={date}
         status={status}
         />
         
         <p className="w90 my-3 text-sm text-black/60 text-center px-3">{desc}</p>
         
         <p onClick={() => {
           setShowOverlay(true)  
         }}
          className="tblue text-sm my-3  font-medium mx-5">Read more...</p>
         
         
        </div>
    </>
    )
}
