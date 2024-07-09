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
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Latest News</h2>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            View All News
          </Link>
        </div>
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 ml-6 mr-6">
          <Carousel
            pauseOnHover
            className="items-center"
            indicators={true}
            theme={"dark"}
          >
            {news.map((newsItem) => (
              <div key={newsItem.id}>
                <img
                  key={newsItem._id}
                  src={newsItem.imgURL}
                  alt="News Image"
                  className="h-80 w-full object-cover rounded-t-md"
                ></img>
                <span className="mt-3 ml-3 text-3xl font-bold">
                  {newsItem.title}
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default News;
