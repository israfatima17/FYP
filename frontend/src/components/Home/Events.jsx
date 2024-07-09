import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "event");
      setEvents(res.data);
      console.log(res);
    };
    fetchEvents();
  }, []);
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Upcoming Events</h2>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            View All Events
          </Link>
        </div>
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 ml-6 mr-6">
          <Carousel
            pauseOnHover
            className="items-center"
            indicators={true}
            theme={"dark"}
          >
            {events.map((eventItem) => (
              <div key={eventItem.id}>
                <img
                  key={eventItem._id}
                  src={eventItem.imgURL}
                  alt="News Image"
                  className="h-80 w-full object-cover rounded-t-md"
                ></img>
                <span className="mt-3 ml-3 text-3xl font-bold">
                  {eventItem.title}
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Events;
