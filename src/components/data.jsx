import {List} from './Utilities'

export const assignments = [
  {
    subject: "CHM 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        In the middle of your textbook, after page 130.
        Answer the questions, tear it out of the textbook, then staple it together for submission.
      </p>
    ),
    contentText: "In the middle of your textbook, after page 130. Answer the questions, tear it out of the textbook, then staple it together for submission."
  },
  {
    subject: "COS 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Page 23, Exercise 3 of the COS 101 manual. Perform the tasks and staple it to the back of your manual for submission.
      </p>
    ),
    contentText: "Page 23, Exercise 3 of the COS 101 manual. Perform the tasks and staple it to the back of your manual for submission."
  },
  {
    subject: "COS 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Answer page 1-12 on your COS 101 manuals.
      </p>
    ),
    contentText: "Answer page 1-12 on your COS 101 manuals."
  },
  {
    subject: "GST 111",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Draw and label the human speech organs. To be done on a white sheet of Cardboard Paper.
      </p>
    ),
    contentText: "Draw and label the human speech organs. To be done on a white sheet of Cardboard Paper."
  },
  {
    subject: "GST 111",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Write an essay describing how you spent the short academic holiday break. To be done on Foolscap paper.
      </p>
    ),
    contentText: "Write an essay describing how you spent the short academic holiday break. To be done on Foolscap paper."
  },
  {
    subject: "MTH 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Page 117, Example 10.11 of the MTH 101 Textbook. Write out the example 10.11 on a Foolscap sheet of paper to be submitted.
      </p>
    ),
    contentText: "Page 117, Example 10.11 of the MTH 101 Textbook. Write out the example 10.11 on a Foolscap sheet of paper to be submitted."
  },
  {
    subject: "PHY 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <div>
        <p className="w80 tgray text-center my-5">Answer the following questions:</p>
        <div className="my-3 border w90 rounded-xl px-3 py-5 border-black/10">
          <p className="mx-3 text-lg font-semibold">1</p>
          <p className="text-black/80 my-3">
            From Newton's law of gravitation, the force of attraction of two masses M1 and M2 separated by a distance r is given by... 
            <img src="f.png" className="w50" alt="gravity"/>
            The dimension of the gravitational constant G, in SI unit.
          </p>
        </div>
        <div className="border my-3 w90 rounded-xl px-3 py-5 border-black/10">
          <p className="mx-3 text-lg font-semibold">2</p>
          <p className="text-black/80 my-3">
            Show that the unit of v²/r are those of acceleration.
          </p>
        </div>
        <div className="border my-3 w90 rounded-xl px-3 py-5 border-black/10">
          <p className="mx-3 text-lg font-semibold">3</p>
          <p className="text-black/80 my-3">
            The velocity of a wave in a string of length L, mass M, and under the tension F is given by...
            <img src="v.png" className="w50" alt="wave velocity"/>
            Where x, y, and z are constants. Find the values of x, y, and z and the dimension of K.
          </p>
        </div>
        <p className="w80 tgray text-center my-5">To be done on a Foolscap sheet.</p>
      </div>
    ),
    contentText: "Answer the following questions: From Newton's law of gravitation... Show that the unit of v²/r are those of acceleration. The velocity of a wave in a string of length L, mass M, and under the tension F is given by... Where x, y, and z are constants. Find the values of x, y, and z and the dimension of K. To be done on a Foolscap sheet."
  },
  {
    subject: "STA 111",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <>  
        <p className="w80 tgray text-center my-5">Explain the following:</p>  
        <div>  
            <List  
            num="i"  
            item="Simple Bar Chart"  
            />  
              
            <List  
            num="ii"  
            item="Component Bar Chart"  
            />  
              
            <List  
            num="ii"  
            item="Multiple Bar Chart"  
            />  
              
            <List  
            num="iv"  
            item="Histogram"  
            />  
              
            <List  
            num="v"  
            item="Pie Chart"  
            />  
              
            <List  
            num="vi"  
            item="Cumulative Frequency Chart"  
            />  
              
            <List  
            num="vii"  
            item="O-give"  
            />  
              
            <p className="w80 tgray text-center my-5">Using self formulated data to illustrate all, <b>to be done on a 20 leaves exercise book</b></p>  
              
              
        </div>  
        </>  
    ),
    contentText: "Explain the following: Simple Bar Chart, Component Bar Chart, Multiple Bar Chart, Histogram, Pie Chart, Cumulative Frequency Chart, O-give. Using self-formulated data to illustrate all, to be done on a 20 leaves exercise book."
  },
  {
    subject: "IGB 101",
    date: "15/12/2025",
    due: null,
    completed: false,
    content: (
      <p className="w80 tgray text-center my-5">
        Pages 1 - 5 of your Igbo Workbook. More assignments may be added.
      </p>
    ),
    contentText: "Pages 1 - 5 of your Igbo Workbook. More assignments may be added."
  }
];