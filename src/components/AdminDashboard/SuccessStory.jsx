import { Button, Label, Card, FileInput, TextInput } from "flowbite-react";
import { imageDb } from "../../firebase/ImgDB";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

const SuccessStory = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    console.log(img, title);
    if (
      img !== null &&
      title !== null &&
      title !== "" &&
      description !== null &&
      description !== ""
    ) {
      setUploading(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      const result = await uploadBytes(imgRef, img);
      const link = await getDownloadURL(result.ref);
      const obj = { title: title, imgURL: link };
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "story/create",
        {
          title: title,
          imgURL: link,
          description: description,
        }
      );
      console.log(res.data);
      setImgUrl([...imgUrl, obj]);

      setUploading(false);
      setImg("");
      setTitle("");
    } else {
      alert("Fill all fields");
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "story/");
      console.log(res.data);
      setImgUrl(res.data);
    };
    getEvents();
    console.log(imgUrl);
  }, [uploading, deleting]);

  const handleDelete = async (e, imgID) => {
    setDeleting(true);

    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "story/delete",
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
      <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
      <div className="bg-card rounded-lg shadow p-6">
        <form className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="story-image">Story Image</Label>
            <FileInput
              id="story-image"
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              className="file:bg-primary file:text-primary-foreground file:border-none file:rounded file:px-4 file:py-2 file:mr-4 file:cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="story-title">Story Title</Label>
            <TextInput
              id="story-title"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="story-title">Story Description</Label>
            <TextInput
              id="story-title"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button className="col-span-2 bg-primary" onClick={handleClick}>
            {uploading ? "Please wait" : "Create Story"}
          </Button>
        </form>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {imgUrl.map((img) => (
          <Card key={img.id} className="bg-card rounded-lg shadow">
            <img
              src={img.imgURL}
              alt="Success Story Image"
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{img.title}</h3>
              <p>{img.description}</p>
              <div className="flex  flex-row-reverse">
                <Button
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

export default SuccessStory;