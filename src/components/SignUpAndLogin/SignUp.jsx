import { Card, Label, TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/auth";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation to ensure it ends with '@gmail.com'
  const isGmailEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  // Password validation to ensure it has at least one uppercase letter, one special character, and a minimum length
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    let isValid = true;

    // Email validation
    if (!isGmailEmail(email)) {
      setEmailError("Only Gmail addresses (ending with @gmail.com) are allowed.");
      isValid = false;
    } else {
      setEmailError(""); // Clear email error if valid
    }

    // Password validation
    if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 8 characters long, include one uppercase letter and one special character.");
      isValid = false;
    } else {
      setPasswordError(""); // Clear password error if valid
    }

    // If validations pass, continue with registration
    if (isValid) {
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
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
    <Card className="p-10 max-w-lg w-full rounded-2xl shadow-2xl bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Alumni Registration</h2>
        <p className="text-sm text-gray-600">
          Join our alumni community by submitting your details below. Already a member?{" "}
          <a href="/login" className="text-indigo-600 font-semibold hover:underline">
            Log in here
          </a>
          .
        </p>
      </div>
  
      {/* Form Fields */}
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <TextInput
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
          />
        </div>
  
        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <TextInput
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
          />
          {emailError && (
            <p className="text-red-600 text-xs mt-1">{emailError}</p>
          )}
        </div>
  
        {/* Password Field */}
        <div>
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <TextInput
            id="password"
            type="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400"
          />
          {passwordError && (
            <p className="text-red-600 text-xs mt-1">{passwordError}</p>
          )}
        </div>
      </div>
  
      {/* Action Buttons */}
      <div className="mt-8">
        <Button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-md transition-all"
        >
          Register
        </Button>
      </div>
  
      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already registered?{" "}
          <a href="/login" className="text-indigo-600 font-semibold hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </Card>
  </div>
  );
};

export default SignUp;
