import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(import.meta.env.VITE_BASE_URL + "news");
      setNews(response.data);
      console.log(response.data);
    };

    fetchNews();
  }, []);

  return (
    <section className="py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl text-gray-800">Latest News</h2>
          <Link
            to="/news"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All News
          </Link>
        </div>
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            pauseOnHover
            className="rounded-lg shadow-lg overflow-hidden"
            indicators={true}
            theme={"dark"}
          >
            {news.map((newsItem) => (
              <div key={newsItem.id} className="relative">
                <img
                  key={newsItem._id}
                  src={newsItem.imgURL}
                  alt="News Image"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <h3 className="text-lg font-semibold">{newsItem.title}</h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default News;
