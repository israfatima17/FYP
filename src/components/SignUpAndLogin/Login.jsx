import { Card, Label, TextInput, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuth] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        localStorage.setItem("email", userCred.email);
        userCred.getIdTokenResult().then((tokenID) => {
          console.log(tokenID);
        });
      }
    });

    if (authorized) {
      navigate("/Profile");
    }

    return () => unsubscribe();
  }, [authorized, navigate]);

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        setAuth(true);
        alert("User logged in!");
        navigate("/Profile");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setAuth(true);
      alert("Google Sign-In successful!");
      navigate("/Profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
    <Card className="p-8 max-w-md w-full rounded-2xl shadow-2xl bg-white">
      <div className="text-center mb-6">
       
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
          Welcome Back, Alumni!
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Stay connected with your alumni network, access resources, and grow
          together.
        </p>
      </div>
  
      <h1 className="text-lg font-bold text-gray-700 mb-4">Login to Continue</h1>
  
      <div className="space-y-4">
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
            className="mt-1 w-full border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
  
        {/* Password Field */}
        <div className="relative">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <TextInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full border-gray-300 rounded-lg px-4 py-2 pr-12 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
  
      {/* Buttons */}
      <div className="mt-6 space-y-4">
        <Button
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2.5 rounded-lg hover:from-indigo-600 hover:to-purple-600 shadow-md transition-all"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-100 shadow-sm"
        >
          <FcGoogle className="w-5 h-5 mr-2" />
          Sign in with Google
        </Button>
      </div>
  
      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register Here
          </a>
        </p>
      </div>
    </Card>
  </div>
  );
};

export default Login;
