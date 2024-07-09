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
    <div className="max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground">
          Welcome to University
        </h1>
        <p className="text-primary-foreground/80">
          Create an account or sign in to get started.
        </p>
      </div>
      <Card>
        <h1 className="text-3xl text-center font-bold">Register</h1>
        <p>Fill out the form below to create a new account.</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <TextInput
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
