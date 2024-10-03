import { Button, Label, Card, TextInput, FileInput } from "flowbite-react";
import { imageDb } from "../../firebase/ImgDB";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

const Events = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");      // New state for event date
  const [location, setLocation] = useState("");  // New state for event location

  const handleClick = async () => {
    if (img !== null) {
      setUploading(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      const result = await uploadBytes(imgRef, img);
      const link = await getDownloadURL(result.ref);
      const obj = { title: title, imgURL: link, date: date, location: location };  // Include new fields
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "event/create",
        {
          title: title,
          imgURL: link,
          date: date,       // Send event date to API
          location: location,  // Send event location to API
        }
      );
      console.log(res.data);
      setImgUrl([...imgUrl, obj]);

      setUploading(false);
      setImg("");
      setTitle("");
      setDate("");        // Clear date input
      setLocation("");    // Clear location input
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "event/");
      console.log(res.data);
      setImgUrl(res.data);
    };
    getEvents();
    console.log(imgUrl);
  }, [uploading, deleting]);

  const handleDelete = async (e, imgID) => {
    setDeleting(true);

    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "event/delete",
      {
        id: imgID,
      }
    );
    if (res.data.status === true) {
      setImgUrl(imgUrl.filter((img) => img.id !== imgID));
    }
    setDeleting(false);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="bg-card rounded-lg shadow p-6">
        <form className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="event-image">Event Image</Label>
            <FileInput
              type="file"
              className="m-1 text-blue-500 file:border-none file:rounded-md file:py-2 file:px-3 file:hover:file:bg-gray-100"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-title">Event Title</Label>
            <TextInput
              id="event-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-date">Event Date</Label>
            <TextInput
              id="event-date"
              type="date"              // Date input for event date
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-location">Event Location</Label>
            <TextInput
              id="event-location"
              type="text"               // Input for event location
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button className="col-span-2 bg-primary" onClick={handleClick}>
            {!uploading ? "Create Event" : "Please wait"}
          </Button>
        </form>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {imgUrl.map((img) => (
          <Card key={img.id} className="bg-card rounded-lg shadow">
            <img
              src={img.imgURL}
              alt="Event Image"
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{img.title}</h3>
              <p className="text-gray-500 mb-2">Date: {img.date}</p>   {/* Display event date */}
              <p className="text-gray-500 mb-4">Location: {img.location}</p> {/* Display event location */}
              <div className="flex  flex-row-reverse">
                <Button
                  id={img.id}
                  variant="destructive"
                  className="bg-destructive"
                  onClick={(e) => handleDelete(e, img.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Events;
