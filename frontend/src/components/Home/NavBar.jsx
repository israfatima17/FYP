import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { UniversityIcon } from "../Icons/UniversityIcon";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <UniversityIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">University</span>
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to={"/news"}
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            News
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Admissions
          </Link>
          <Link
            to={"/stories"}
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Success Stories
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Campus Life
          </Link>
          <Link
            to={"/alumniSearch"}
            className="text-sm font-medium hover:underline"
          >
            Alumni
          </Link>
        </div>
        <Button className="bg-primary" onClick={handleLogin}>
          Login
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
