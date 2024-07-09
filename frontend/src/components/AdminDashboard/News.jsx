import { Button, Label, Card, FileInput, TextInput } from "flowbite-react";
import { imageDb } from "../../firebase/ImgDB";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
const News = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [title, setTitle] = useState("");

  const handleClick = async () => {
    console.log(img, title);
    if (img !== null) {
      setUploading(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      const result = await uploadBytes(imgRef, img);
      const link = await getDownloadURL(result.ref);
      const obj = { title: title, imgURL: link };
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "news/create",
        {
          title: title,
          imgURL: link,
        }
      );
      console.log(res.data);
      setImgUrl([...imgUrl, obj]);

      setUploading(false);
      setImg("");
      setTitle("");
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "news/");
      console.log(res.data);
      setImgUrl(res.data);
    };
    getEvents();
    console.log(imgUrl);
  }, [uploading, deleting]);

  const handleDelete = async (e, imgID) => {
    setDeleting(true);

    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + "news/delete",
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
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <div className="bg-card rounded-lg shadow p-6">
        <form className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="news-image">News Image</Label>
            <FileInput
              id="news-image"
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
              className="file:bg-primary file:text-primary-foreground file:border-none file:rounded file:px-4 file:py-2 file:mr-4 file:cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="news-title">News Title</Label>
            <TextInput
              id="news-title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <Button className="col-span-2 bg-primary" onClick={handleClick}>
            {!uploading ? "Create News" : "Please wait"}
          </Button>
        </form>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {imgUrl.map((img) => (
          <Card key={img.id} className="bg-card rounded-lg shadow">
            <img
              src={img.imgURL}
              alt="News Image"
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{img.title}</h3>
              <div className="flex  flex-row-reverse">
                <Button
                  className="bg-destructive"
                  variant="destructive"
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

export default News;
