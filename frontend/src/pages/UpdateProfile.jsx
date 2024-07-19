import {
  Button,
  Card,
  Label,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { imageDb } from "../firebase/ImgDB";
import { useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [batch, setBatch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [about, setAbout] = useState("");
  const [achievements, setAchievements] = useState("");
  const [updating, setUpdating] = useState(false);
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const updateImg = async () => {
    if (img !== null) {
      setUploading(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      const result = await uploadBytes(imgRef, img);
      const link = await getDownloadURL(result.ref);
      console.log(link);
      return link.toString();
    }
    return "";
  };

  const handleUpdate = async () => {
    // trim all use states
    setUpdating(true);
    setName(name.trim());
    setDesignation(designation.trim());
    setBatch(batch.trim());
    setRollNumber(rollNumber.trim());
    setDepartment(department.trim());
    setAbout(about.trim());
    setAchievements(achievements.trim());

    const link = await updateImg();
    console.log(link);
    if (
      name !== null &&
      name !== "" &&
      designation !== null &&
      designation !== "" &&
      batch !== null &&
      batch !== "" &&
      rollNumber !== null &&
      rollNumber !== "" &&
      department !== null &&
      department !== "" &&
      about !== null &&
      about !== "" &&
      achievements !== null &&
      achievements !== ""
    ) {
      const email = localStorage.getItem("email");
      console.log(email);
      const id = await axios.post(
        import.meta.env.VITE_BASE_URL + "alumni/getId",
        {
          email: email,
        }
      );

      if (id) {
        console.log(link) ;
        await axios.post(import.meta.env.VITE_BASE_URL + "alumni/update", {
          id: id.data.id,
          name,
          designation,
          batch,
          rollNumber,
          department,
          about,
          achievements,
          img: link,
        });
      }
    }
    setUpdating(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-center mb-2">Update Profile</h1>
        <p className="text-xl">Manage your alumni profile information.</p>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-bold" htmlFor="name">
              Update Picture
            </Label>
            <FileInput
              //   id="event-image"

              type="file"
              className="m-1 text-blue-500  file:border-none file:rounded-md file:py-2 file:px-3 file:hover:file:bg-gray-100"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold" htmlFor="name">
              Name
            </Label>
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold" htmlFor="designation">
              Designation
            </Label>
            <TextInput
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              id="designation"
              placeholder="Enter your designation"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-bold" htmlFor="batch">
              Batch
            </Label>
            <TextInput
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              id="batch"
              placeholder="Enter your batch"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold" htmlFor="roll-number">
              Roll Number
            </Label>
            <TextInput
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              id="roll-number"
              placeholder="Enter your roll number"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="font-bold" htmlFor="department">
            Department
          </Label>
          <TextInput
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            id="department"
            placeholder="Enter your department"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-bold" htmlFor="about">
            About
          </Label>
          <Textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            id="about"
            rows={4}
            placeholder="Tell us about yourself"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-bold" htmlFor="achievements">
            Achievements
          </Label>
          <Textarea
            id="achievements"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            rows={4}
            placeholder="List your achievements"
          />
        </div>
      </div>
      <div>
        <Button onClick={handleUpdate} className="ml-auto bg-primary">
          {updating ? "Updating..." : "Update"}
        </Button>
      </div>
    </Card>
  );
};

export default UpdateProfile;
