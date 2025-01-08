import { Link } from "react-router-dom";
import { Card, Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

const SuccessStory = () => {
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_BASE_URL + "story");
        setSuccessStories(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };
    fetchSuccessStories();
  }, []);

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl text-gray-800">Success Stories</h2>
          <Link
            to="/stories"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All Stories
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {successStories.map((story) => (
            <Card key={story.id} className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg">
              <Avatar
                img={story.imgURL}
                size="xl"
                rounded={true}
                className="mb-4 w-32 h-32 object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
