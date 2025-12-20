import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssignmentHub from './pages/AssignmentHub'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Announcements from './pages/Announcements'

function App() {
  return (
  <>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignment_hub" element={<AssignmentHub/>} />
      <Route path="/announcements" element={<Announcements/>}/>
    </Routes>
  </>
  );
}

export default App;
