import { List } from './Utilities';

export const data = [

{
    id: 'clearance-deadline',
    title: 'Departmental Clearance Deadline',
    date: 'Mon, 17th Nov 2025',
    status: 'urgent',
    desc:
      'The Department has observed that out of close to 300 students, only 15 students have completed their departmental clearance. Studen...',
    content: (
      <p className="w90 text-black/70 text-center my-5">
        The Department has observed that out of close to <b>300</b> students,
        only <b>15</b> students have completed their departmental clearance.<br /><br />
        The deadline has been moved forward to <b>Wednesday, 17/12/25</b>.<br />
        Any student who fails to complete clearance before this date should be
        prepared to pay <b>additional penalties</b>.<br /><br />
        Without completing clearance, you are not yet recognized as a
        <b> Computer Science student</b>.
      </p>
    )
  },

  {
    id: 'physical-clearance',
    title: 'Physical Clearance Documents',
    date: 'Mon, 3rd Nov 2025',
    status: 'important',
    desc:
      'All students are reminded to prepare and submit the required documents for physical clearance. Ensure that all documents are complete and accurate befo...',
    content: (
      <>
        <p className="my-2 w90 text-black/70 text-center">
          Physical clearance for the <b>Computer Science Department</b> takes
          place only on <b>Tuesdays</b>.<br /><br />
          Students are advised to attend strictly on the approved day, as
          clearance will not be conducted on other days.<br /><br />
          Collection of CSC 22 forms will be done only on <b>Fridays</b>.<br /><br />
          Students are to come along with the following documents for clearance
          arranged in this manner:
        </p>

        <div className="my-10">
          <List num="1" item="Jamb Original Result Slip" desc="1 original copy" />
          <List num="2" item="Duplicate of JAMB Admission letter" desc="1 original copy" />
          <List num="3" item="FUTO PUTME application slip" desc="1 photocopy" />
          <List num="4" item="FUTO PUTME screening Result slip" desc="1 original copy" />
          <List num="5" item="O-Level Statements of result" desc="1 original copy" />
          <List num="6" item="Confirmation of Admission slip" desc="1 original copy & 1 photocopy" />
          <List num="7" item="FUTO Admission Letter" desc="3 original copies" />
          <List num="8" item="Development Levy receipt" desc="1 photocopy" />
          <List num="9" item="School Fees receipt" desc="1 photocopy" />
          <List num="10" item="Candidate Profile slip" desc="1 original copy" />
          <List num="11" item="Original Validity Form with Passport" desc="3 original copies" />
          <List num="12" item="Signed Acceptance Letter" desc="3 photocopies" />
          <List num="13" item="Student Information Form" desc="3 original copies" />
          <List num="14" item="Undertaking Form" desc="3 photocopies" />
          <List num="15" item="Birth Certificate" desc="1 photocopy" />
          <List num="16" item="Local Govt Certification Letter" desc="1 photocopy" />
          <List num="17" item="NIN slip or certificate" desc="1 photocopy" />
          <List
            num="18"
            item="Direct Entry Candidates: OND/HND/Degree statement of results"
            desc="1 original copy"
          />
        </div>

        <p className="my-2 w90 text-black/70 text-center">
          Ensure that all documents are complete and properly arranged before
          coming, as incomplete documents may delay your clearance.
        </p>
      </>
    )
  },

  

  {
    id: 'departmental-clearance',
    title: 'Departmental Clearance Documents',
    date: 'Mon, 3rd Nov 2025',
    status: 'important',
    desc:
      'All students are hereby informed that the following documents are required for departmental clearance in the Computer Science Department...',
    content: (
      <>
        <p className="my-2 w90 text-black/70 text-center">
          The following documents are required for departmental clearance:
        </p>

        <div className="my-10">
          <List num="1" item="O-Level Certificate" desc="1 original copy" />
          <List num="2" item="JAMB Original Result slip" desc="1 original copy" />
          <List num="3" item="Duplicate of JAMB Admission letter" desc="1 original copy" />
          <List num="4" item="FUTO Admission letter" desc="not stated" />
          <List num="5" item="Letter of attestation" desc="1 photocopy" />
          <List num="6" item="Birth Certificate" desc="1 photocopy" />
          <List num="7" item="Local Govt Certification Letter" desc="1 original copy" />
          <List num="8" item="Primary School Certificate" desc="1 original copy" />
          <List num="9" item="3 Office Flat Files" desc="" />
          <List num="10" item="3 File Tags" desc="" />
          <List num="11" item="Passports" desc="up to 8" />
          <List num="12" item="Confirmation of Admission Slip" desc="3 photocopies" />
        </div>

        <p className="my-5 w90 text-black/70 text-center">
          Payment of approved fees is mandatory for clearance.
        </p>
      </>
    )
  }
];

export const urgent  = data.filter(a => a.status === "urgent");
export const important = data.filter(a => a.status === "important");
export const notice = data.filter(a => a.status === "notice");

