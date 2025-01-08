import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import axios from "axios";
import { useEffect, useState } from "react";

const AlumniApprovalPage = () => {
  const [alumni, setAlumni] = useState([]);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAlumni = async () => {
      const alumni = await axios.get(import.meta.env.VITE_BASE_URL + "alumni/all");
      setAlumni(alumni.data.filter((alumnus) => !alumnus.isVerified));
    };

    const verifyAdmin = async () => {
      const email = localStorage.getItem("email");
      const res = await axios.post(import.meta.env.VITE_BASE_URL + "admin/verify", {
        email: email,
      });
      if (res.data.isAdmin === false) {
        navigate("/login");
      }
    };

    verifyAdmin();
    getAlumni();
  }, [verified, navigate]);

  const handleAccept = async (id) => {
    const email = localStorage.getItem("email");
    if (!email) {
      console.error("Error approving alumni: Email is missing from localStorage");
      return;
    }
  
    try {
      setVerified(true); // Disable the button during the request
  
      const res = await axios.post(import.meta.env.VITE_BASE_URL + "alumni/update", {
        email: email,  // Include email if needed for logging or notifications
        id: id,        // Make sure to include the ID of the alumni being approved
        isVerified: true,
      });
  
      console.log(res.data); // Log the server's response after approval
  
      // Remove the approved alumni from the list
      setAlumni(alumni.filter((alumnus) => alumnus.id !== id));
  
      setVerified(false); // Re-enable the button
    } catch (error) {
      console.error("Error approving alumni:", error.response?.data || error.message); // Show the error
      setVerified(false); // Re-enable the button in case of error
    }
  };


  

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Alumni Portal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Alumni
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Alumni Approval
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Review and approve the alumni profiles.
            </p>
          </div>
          <div className="grid gap-6">
            {alumni.map((alumnus) => (
              <Card key={alumnus.id}>
                <div className="flex items-center justify-between">
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">{alumnus.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Batch: {alumnus.batch}, Roll: {alumnus.rollNumber}, department: {alumnus.department}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="bg-primary"
                      size="sm"
                      onClick={() => handleAccept(alumnus.id)}
                      disabled={verified}
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Alumni</h3>
            <Link href="#">Profiles</Link>
            <Link href="#">Events</Link>
            <Link href="#">Mentorship</Link>
            <Link href="#">Donate</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#">Our Mission</Link>
            <Link href="#">History</Link>
            <Link href="#">Team</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Policies</Link>
            <Link href="#">Careers</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlumniApprovalPage;

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
