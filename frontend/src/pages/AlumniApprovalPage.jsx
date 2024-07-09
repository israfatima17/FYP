import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import axios from "axios";
import { useEffect, useState } from "react";

const AlumniApprovalPage = () => {
  const [alumni, setAlumni] = useState([]);
  const [verified, setVerified] = useState(false);
  const [rejected, setRejected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAlumni = async () => {
      const alumni = await axios.get(import.meta.env.VITE_BASE_URL + "alumni/");
      setAlumni(
        alumni.data.filter(
          (alumnus) => alumnus.verified !== undefined && !alumnus.verified
        )
      );
    };
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
    getAlumni();
  }, [verified, rejected]);

  const handleAccept = async (id) => {
    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "alumni/update",
      {
        id,
        verified: true,
      }
    );
    console.log(res);
    setVerified(true);
  };

  const handleReject = async (id) => {
    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "alumni/update",
      {
        id,
        verified: false,
      }
    );
    console.log(res);
    setRejected(true);
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Alumni Portal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Alumni
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
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
                      Batch: {alumnus.batch}, Roll: {alumnus.rollNumber},
                      department:{alumnus.department}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="bg-destructive"
                      variant="outline"
                      size="sm"
                      onClick={() => handleReject(alumnus.id)}
                    >
                      Reject
                    </Button>

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
            <Link href="#" prefetch={false}>
              Profiles
            </Link>
            <Link href="#" prefetch={false}>
              Events
            </Link>
            <Link href="#" prefetch={false}>
              Mentorship
            </Link>
            <Link href="#" prefetch={false}>
              Donate
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Our Mission
            </Link>
            <Link href="#" prefetch={false}>
              History
            </Link>
            <Link href="#" prefetch={false}>
              Team
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Policies
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
            <Link href="#" prefetch={false}>
              Facebook
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
            <Link href="#" prefetch={false}>
              Accessibility
            </Link>
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
