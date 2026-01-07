import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssignmentHub from './pages/AssignmentHub'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Announcements from './pages/Announcements'
import CourseOutlines from './pages/CourseOutlines'
import {useState, createContext, useContext} from 'react'

export const AppContext = createContext(null)

function App() {

  const [asindex, setAsindex] = useState(0)

  return (
  <AppContext.Provider value={{ asindex, setAsindex }}>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignment_hub" element={<AssignmentHub/>} />
      <Route path="/announcements" element={<Announcements/>}/>
      <Route path="/course_outlines" element={<CourseOutlines/>}/>
    </Routes>
  </AppContext.Provider>
  );
}

export default App;
