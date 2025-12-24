import { mth101, chm101, gst111, phy101, cos101, gst211, sta111, frn101, igb101 } from './data';
import Course from './Course'

export default function Courses() {


    return (
        <div className="flex px-3 gap-3 flex-wrap around ">
            
            <Course
            text='MTH 101'
            count={mth101.length}
            cors={mth101}
            />
            
            <Course
            text='CHM 101'
            count={chm101.length}
            cors={chm101}
           />
            
            <Course
            text='GST 111'
            count={gst111.length}
            cors={gst111}
            />
            
            <Course
            text='PHY 101'
            count={phy101.length}
            cors={phy101}
            />
            
            <Course
            text='COS 101'
            count={cos101.length}
            cors={cos101}
           />
            
            <Course
            text='GST 211'
            count={gst211.length}
            cors={gst211}
            />
            
            <Course
            text='STA 111'
            count={sta111.length}
            cors={sta111}
            />
            
            <Course
            text='FRN 101'
            count={frn101.length}
            cors={frn101}
           />
            
            <Course
            text='IGB 101'
            count={igb101.length}
            cors={igb101}
            />
            
        </div>
    )
}
