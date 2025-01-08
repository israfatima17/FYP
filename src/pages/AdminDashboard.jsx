import News from "../components/AdminDashboard/News";
import SuccessStory from "../components/AdminDashboard/SuccessStory";
import Events from "../components/AdminDashboard/Events";
import Navbar from "../components/AdminDashboard/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyAdmin = async () => {
      const email = localStorage.getItem("email");
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "admin/verify",
        {
          email: email,
        }
      );
      console.log(res);
      console.log("working");
      if (res.data.isAdmin === false) {
        navigate("/login");
      }
    };
    verifyAdmin();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-6">
        <Events />
        <SuccessStory />
        <News />
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 mt-auto">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
export default AdminDashboard;
