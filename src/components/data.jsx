import {List} from './Utilities'


export const assignments = [
  {
    index: 0,
    subject: "CHM 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        In the middle of your textbook, after page 130.
        Answer the questions, tear it out of the textbook, then staple it together for submission.
      </p>
    ),
    contentText:
      "In the middle of your textbook, after page 130. Answer the questions, tear it out of the textbook, then staple it together for submission."
  },
  {
    index: 1,
    subject: "COS 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Page 23, Exercise 3 of the COS 101 manual. Perform the tasks and staple it to the back of your manual for submission.
      </p>
    ),
    contentText:
      "Page 23, Exercise 3 of the COS 101 manual. Perform the tasks and staple it to the back of your manual for submission."
  },
  {
    index: 2,
    subject: "COS 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Answer page 1-12 on your COS 101 manuals.
      </p>
    ),
    contentText: "Answer page 1-12 on your COS 101 manuals."
  },
  {
    index: 3,
    subject: "GST 111",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Draw and label the human speech organs. To be done on a white sheet of Cardboard Paper.
      </p>
    ),
    contentText:
      "Draw and label the human speech organs. To be done on a white sheet of Cardboard Paper."
  },
  {
    index: 4,
    subject: "GST 111",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Write an essay describing how you spent the short academic holiday break. To be done on Foolscap paper.
      </p>
    ),
    contentText:
      "Write an essay describing how you spent the short academic holiday break. To be done on Foolscap paper."
  },
  {
    index: 5,
    subject: "MTH 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Page 117, Example 10.11 of the MTH 101 Textbook. Write out the example 10.11 on a Foolscap sheet of paper to be submitted.
      </p>
    ),
    contentText:
      "Page 117, Example 10.11 of the MTH 101 Textbook. Write out the example 10.11 on a Foolscap sheet of paper to be submitted."
  },
  {
    index: 6,
    subject: "PHY 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <div>
        <p className="w80 tgray text-center my-5">Answer the following questions.</p>
        <p className="w80 tgray text-center my-5">
          To be done on a Foolscap sheet.
        </p>
      </div>
    ),
    contentText:
      "Answer the following questions. To be done on a Foolscap sheet."
  },
  {
    index: 7,
    subject: "STA 111",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <>
        <p className="w80 tgray text-center my-5">Explain the following charts.</p>
        <p className="w80 tgray text-center my-5">
          Using self formulated data to illustrate all, to be done on a 20 leaves exercise book.
        </p>
      </>
    ),
    contentText:
      "Explain the following charts and illustrate using self formulated data. To be done on a 20 leaves exercise book."
  },
  {
    index: 8,
    subject: "IGB 101",
    date: "15/12/2025",
    due: null,
    dueDate: '',
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Pages 1 - 5 of your Igbo Workbook. More assignments may be added.
      </p>
    ),
    contentText:
      "Pages 1 - 5 of your Igbo Workbook. More assignments may be added."
  }
];


export const submittedAssignments = assignments.filter(
  assignment => assignment.completed === true && assignment.due === null
);

export const dueAssignments = assignments.filter(
  assignment => assignment.due === true && assignment.completed == false
);

export const pendingAssignments = assignments.filter(
  assignment => assignment.completed === false && assignment.due === null
);


export const mth101 = assignments.filter(a => a.subject === "MTH 101");
export const chm101 = assignments.filter(a => a.subject === "CHM 101");
export const gst111 = assignments.filter(a => a.subject === "GST 111");
export const phy101 = assignments.filter(a => a.subject === "PHY 101");
export const cos101 = assignments.filter(a => a.subject === "COS 101");
export const gst211 = assignments.filter(a => a.subject === "GST 211");
export const sta111 = assignments.filter(a => a.subject === "STA 111");
export const frn101 = assignments.filter(a => a.subject === "FRN 101");
export const igb101 = assignments.filter(a => a.subject === "IGB 101");