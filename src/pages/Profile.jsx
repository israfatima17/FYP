import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "flowbite-react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [userEmail, setUserEmail] = useState(null); // Store the user's email
  console.log(profile)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Set the email when the user is authenticated
      } else {
        console.error("User not authenticated.");
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, [navigate]);
  console.log(userEmail)
  useEffect(() => {
    const fetchProfileData = async () => {
      if (userEmail) { // Only fetch if email is set
        try {
          const response = await axios.post(
            "http://localhost:5555/alumni/getProfile",
            { email: userEmail }
          );
          console.log(response.data);
          setProfile(response.data[0]); // Set profile data
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
    };

    fetchProfileData();
  }, [userEmail]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(profile)

  const handleUpdateProfile = () => {
    navigate("/updateProfile");
    window.localStorage.setItem("alumniID", profile?.id)
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Navbar Section */}
      <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between h-24">
        <div className="flex items-center gap-4">
          <Avatar size={"lg"} img={profile?.updateData?.img} rounded />
          <div className="text-white">
            <p className="font-bold text-lg">{profile?.name}</p>
            <p>{profile?.updateData?.batch}</p>
          </div>
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

      {/* Main Section */}
      <main className="flex flex-grow">
        <div className="bg-gray-100 p-6 w-1/4">
          <h2 className="text-lg font-semibold">You are viewing an alumni profile page.</h2>
          <p className="text-muted-foreground">
            Update your profile. Once updated, it will be approved by the admin.
          </p>
        </div>

        <div className="flex-1 bg-white p-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Alumni Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Name</h3>
                <p className="text-muted-foreground">{profile?.name}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Batch</h3>
                <p className="text-muted-foreground">{profile?.updateData?.batch}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Department</h3>
                <p className="text-muted-foreground">{profile?.updateData?.department}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Designation</h3>
                <p className="text-muted-foreground">{profile?.updateData?.designation}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <p className="text-muted-foreground">{profile?.updateData?.about}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Achievements</h3>
                <p className="text-muted-foreground">{profile?.updateData?.achievements}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
