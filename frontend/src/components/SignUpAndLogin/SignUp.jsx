import { Card, Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/auth";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await axios.post(import.meta.env.VITE_BASE_URL + "alumni/create", {
        name: name,
        email: email,
      });
      alert("User signed up!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md space-y-6 mx-auto">
    {/* Container for title and line */}
    <div className="relative flex items-center">
      <h1 className="text-3xl font-bold text-[rgb(25,23,139)] absolute top-[-70px] left-8 p-4 letter-spacing-2 font-roboto">
        Alumni Registration
      </h1>

      <div className="h-px bg-[rgb(113,31,60)] w-full absolute top-1/2"></div>
    </div>

    {/* Descriptive Text */}
    <div className="text-white text-sm mt-6 font-roboto">
      <p>
        Please submit the registration form below to join our alumni community.
        Those alumni who have already registered can access their accounts through login.
      </p>
    </div>


      <Card className="bg-white border shadow-md rounded-lg">
        <div className="space-y-4 px-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[rgb(113,31,60)] font-medium">
              Name
            </Label>
            <TextInput
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md focus:outline-none focus:border-[rgb(25,23,139)] px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[rgb(113,31,60)] font-medium">
              Email
            </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-md focus:outline-none focus:border-[rgb(25,23,139)] px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[rgb(113,31,60)] font-medium">
              Password
            </Label>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-md   
 focus:outline-none focus:border-[rgb(25,23,139)] px-3 py-2"
            />
          </div>
        </div>
        <div>
          <Button className="w-full bg-primary" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
