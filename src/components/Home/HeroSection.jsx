import { Button } from "flowbite-react";
import image3 from "../Home/homeassets/image3.jpg";
import { Link } from "react-router-dom"; // Import Link for navigation

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center bg-[rgba(59,57,181,0.8)] p-8 rounded-lg max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white relative">
          WELCOME!
          <span className="absolute bottom-0 left-0 w-full border-b border-white"></span>
        </h1>
        <p className="text-white">
          Welcome to your alumni community of more than 35,000 graduates. Your connection with us extends far beyond graduation day, be sure to check in regularly for the latest news, event invites, and opportunities to stay connected to SAUS and each other.
        </p>
        <div className="flex gap-4">
          {/* Replaced buttons with a single button linking to Alumni Directory */}
          <Link to="/alumni-directory">
            <Button variant="secondary" className="bg-yellow-500 text-white">
              Alumni Directory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
