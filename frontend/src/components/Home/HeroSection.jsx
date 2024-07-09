import { Button } from "flowbite-react";
import { UniversityIcon } from "../Icons/UniversityIcon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground py-24 md:py-32">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
        <UniversityIcon className="h-16 w-16 text-primary-foreground" />
        <h1 className="text-center text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Empowering Minds, Transforming Lives
        </h1>
        <p className="max-w-md text-center text-primary-foreground/80 md:text-lg">
          Discover a world-class education that prepares you for success in the
          21st century.
        </p>
        <Button variant="secondary" className="bg-primary">
          Explore Programs
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
