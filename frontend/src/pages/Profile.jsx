
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "flowbite-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      console.log(userCred);
      if (!userCred) {
        navigate("/login");
      } else {
        axios
          .post(import.meta.env.VITE_BASE_URL + "alumni/getId", {
            email: userCred.email,
          })
          .then((id) => {
            console.log(id);
            localStorage.setItem("UID", id.data.id);
          });
      }
    });

    const profileData = async () => {
      const id = localStorage.getItem("UID");
      console.log("getting data");
      const data = await axios.post(
        import.meta.env.VITE_BASE_URL + "alumni/getProfile",
        {
          id: id,
        }
      );
      console.log(data);
      setProfile(data.data);
    };
    profileData();
  }, []);

  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = () => {
    navigate("/updateProfile");
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2">
            <UniversityIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">University</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Academics
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Campus Life
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-primary" onClick={handleSignOut}>
            Sign out
          </Button>
          <Button className="bg-primary" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background p-6 md:p-10">
        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary p-6 md:p-10 flex flex-col items-center gap-4">
            <Avatar size={"xl"} img={profile.img} rounded></Avatar>
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
              <p className="text-muted-foreground text-white">
                {profile.designation}
              </p>
              <p className="text-muted-foreground text-white">
                {profile.department}, {profile.batch}, {profile.rollNumber}
              </p>
              <p className="text-muted-foreground text-white">
                {profile.email}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="text-muted-foreground">{profile.about}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Achievements</h2>
              <p className="space-y-1 text-muted-foreground">
                {profile.achievements}
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground px-6 py-4 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 University</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline">
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Profile;

function UniversityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  );
}