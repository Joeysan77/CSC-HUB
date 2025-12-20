import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <div className="">
            <div>
               
                <img src="logo2.png" className="w50 my-10 rounded-4xl "alt=""/>
                 <div className="text-3xl font-bold text-center ">Welcome to <div className="pl-1 tblue inline">CSC HUB</div></div>
            <div className="text-2xl text-center text-semibold text-black/80 mt-2">- Your Department Portal</div>
            
            <p className="tgray-lg text-center my-5 w80"> 
                Check assignments, view announcements, and stay updated on events—all in one place.
            </p>
            
            <Link to="assignment_hub" className="flex pri rounded-full my-8 py-2 w80 center gap-5"><p className=" font-medium">View Assignments</p><i className="far fa-arrow-right text-lg"></i></Link>
            </div>
            
           <div className="line mt-20 mb-10 w90"></div>
        </div>
    )
}