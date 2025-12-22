import Assignment from './Assignment'
import {List} from './Utilities'

export default function PendingAssignments() {
    return (
        <div className="rounded-lg border border-black/20 w90 mt-15">
            <div className="flex px-3 border-b border-black/20 v-center between">
                <div className="flex py-1 tpri gap-2 v-center">
                    <i className="fal fa-clock"></i>
                    <p>pending assignments</p>
                </div>
                <div className="flex rounded center px-1 text-sm orange-sm torange">
                    <p>9</p>
                </div>
            </div>
            
            <Assignment 
            subject="CHM 101"
            date="15/12/2025"
            content={<div>
                <p className="w80 tgray text-center my-5">In the middle of your textbook, after page 130
Answer the questions, tear it out of the textbook, then staple it together for submission</p>
            </div>}
            completed={false}
            due="null"
            />
            
            <Assignment 
            subject="COS 101"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Page : 23 Exercise 3 of the COS 101 manual, perform the tasks and print out the results, then staple to the back of your manual fo submission</p>}
            completed={false}
            due="null"
            />
            
            <Assignment
            subject="COS 101"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Answer page 1-12 on your COS 101 manuals</p>}
            completed={false}
            due="null"
            />
            
            <Assignment
            subject="GST 111"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Draw and label the human speech organs --- <br/> To be done on a white sheet of <b>Cardboard Paper</b></p>}
            completed={false}
            due="null"
            />
            
             <Assignment
            subject="GST 111"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Write an essay describing how you spent the short academic holiday break.<br/> to be done on Foolscap paper</p>}
            completed={false}
            due="null"
            />
            
             <Assignment
            subject="MTH 101"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Page 117 , Example 10.11 of the MTH 101 Textbook, write out the example 10.11 on a Foolscap sheet of paper to be submitted</p>}
            completed={false}
            due="null"
            />
            
             <Assignment
            subject="PHY 101"
            date="15/12/2025"
            content={<div>
                <p className="w80 tgray text-center my-5">Answer the following questions
            </p>
            <div className="my-3 border w90 rounded-xl px-3 py-5 border-black/10">
                <p className="mx-3 text-lg font-semibold">1</p>
                <p className="text-black/80 my-3">From Newton's law of gravitation,
the force of attraction of two masses M1
and M2 separatedby a distance r is given
by... <img src="f.png" className="w50"/> the dimension of
the gravitational constant G, in SI unit.</p>
            </div>
            
             <div className="border my-3 w90 rounded-xl px-3 py-5 border-black/10">
                <p className="mx-3 text-lg font-semibold">2</p>
                <p className="text-black/80 my-3">Show that the unit of v²/r are those of
acceleration</p>
            </div>
            
             <div className="border my-3 w90 rounded-xl px-3 py-5 border-black/10">
                <p className="mx-3 text-lg font-semibold">3</p>
                <p className="text-black/80 my-3">The velocity of a wave in a string of
length L, mass M, and under the tension F
is given by... <img src="v.png" className="w50"/>where
x, y and z are constants
Find the values of x, y and z and the
dimension of K</p>
            </div>
            
            <p className="w80 tgray text-center my-5">To be done on a Foolscap sheet.
            </p>
            
            
            </div>}
            completed={false}
            due="null"
            />
            
            
              <Assignment
            subject="STA 111"
            date="15/12/2025"
            content={
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
            }
            completed={false}
            due="null"
            />
            
            
            
            <Assignment
            subject="IGB 101"
            date="15/12/2025"
            content={<p className="w80 tgray text-center my-5">Pages 1 - 5 of your Igbo Workbook <br/><br/><b>more assignments may be added</b></p>}
            completed={false}
            due="null"
            />
            
        </div>
    )
}