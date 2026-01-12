import Hero from '../components/Hero'
import AnnouncementBoard from '../components/AnnouncementBoard'
import AssignmentBoard from '../components/AssignmentBoard'


export default function Home() {
    return (
        <div className="">
            <Hero/>
                <div className="md:flex around w-full">
            <AssignmentBoard />
            <AnnouncementBoard/>
                </div>
         
        </div>
    )
}
