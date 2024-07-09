import { Link } from "react-router-dom";
import { Card, Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
const SuccessStory = () => {
  const [successStories, setSuccessStories] = useState([]);
  useEffect(() => {
    const fetchSuccessStories = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "story");
      setSuccessStories(res.data);
      console.log(res);
    };
    fetchSuccessStories();
  }, []);
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Success Stories</h2>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            View All Stories
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {successStories.map((story) => (
            <Card key={story.id} className="h-full">
              <Avatar img={story.imgURL} rounded className="w-full"></Avatar>
              <div className="space-y-2 p-4">
                <h1>{story.title}</h1>
                {/* <div className="text-sm text-muted-foreground">
                  Class of 2018
                </div> */}
                <p>{story.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
