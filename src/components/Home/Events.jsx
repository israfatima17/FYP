import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_BASE_URL + "event");
        console.log("Fetched Events:", res.data);
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
        </div>

        {/* Events Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Carousel Section */}
          <div className="w-full md:w-1/2">
            <Carousel
              pauseOnHover
              className="rounded-lg shadow-lg overflow-hidden"
              indicators={true}
            >
              {events.length ? (
                events.map((eventItem, index) => (
                  <div key={eventItem._id || index} className="relative">
                    <img
                      src={eventItem.imgURL}
                      alt="Event Image"
                      className="h-72 md:h-96 w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                      <h3 className="text-lg font-semibold">{eventItem.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-72 md:h-96 flex justify-center items-center text-gray-500">
                  No upcoming events.
                </div>
              )}
            </Carousel>
          </div>

          {/* Event Details Section */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Event Details</h3>
            {events.length ? (
              events.map((eventItem, index) => (
                <div key={eventItem._id || index} className="mb-8">
                  <h4 className="text-xl font-semibold mb-2">{eventItem.title}</h4>
                  <p className="text-gray-700 mb-1">{eventItem.description}</p>
                  <p className="text-gray-500 mb-1">
                    <strong>Date:</strong> {new Date(eventItem.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500">
                    <strong>Location:</strong> {eventItem.location}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No event details available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
