import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Admin Dashboard
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="hover:text-primary-foreground/80 transition-colors"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            to={"/alumniApproval"}
            className="hover:text-primary-foreground/80 transition-colors"
            prefetch={false}
          >
            Approve Alumni
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80 transition-colors"
            prefetch={false}
          >
            Success Stories
          </Link>
          <Link
            href="#"
            className="hover:text-primary-foreground/80 transition-colors"
            prefetch={false}
          >
            News
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
