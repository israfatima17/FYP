import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
import News from "../components/Home/News";
import Events from "../components/Home/Events";
import SuccessStory from "../components/Home/SuccessStory";

const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col w-full px-0 mx-0">
      <NavBar />
      <HeroSection />
      <News />
      <Events />
      <SuccessStory />
      {/* <Alumni /> */}
    </div>
  );
};

export default Home;
