import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import SignUpAndLogin from "./pages/SignUpAndLogin";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import AlumniSearch from "./pages/AlumniSearch";
import AlumniProfile from "./pages/AlumniProfile";
import AlumniApprovalPage from "./pages/AlumniApprovalPage";
import News from "./pages/News";
import SuccessStories from "./pages/SuccessStories";

import { Error } from "./pages/Error404";
import CampusLife from "./pages/CampusLife";
import About from "./pages/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/login" element={<SignUpAndLogin />} />
      <Route path="/register" element={<SignUpAndLogin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/alumni/:id" element={<AlumniProfile />} />
      <Route path="/updateProfile" element={<UpdateProfile />} />
      <Route path="/alumniSearch" element={<AlumniSearch />} />
      <Route path="/alumniApproval" element={<AlumniApprovalPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/stories" element={<SuccessStories />} />
      <Route path="/campus-life" element={<CampusLife />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
