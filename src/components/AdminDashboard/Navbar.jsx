import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold">
          Admin Dashboard
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Events
          </Link>
          <Link
            to="/alumniApproval"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Approve Alumni
          </Link>
          <Link
            className="hover:text-primary-foreground/80 transition-colors"
          >
            Success Stories
          </Link>
          <Link
            className="hover:text-primary-foreground/80 transition-colors"
          >
            News
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
