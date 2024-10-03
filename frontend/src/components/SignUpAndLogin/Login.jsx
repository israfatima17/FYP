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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500"> {/* Gradient background */}
  <Card className="p-8 max-w-lg w-full rounded-lg shadow-lg bg-white"> {/* Main card */}
    <div className="text-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Log in to our Alumni Network
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Connect with fellow alumni, access exclusive resources, and stay up-to-date on alumni events.
      </p>
      <h3 className="text-base font-semibold text-gray-700 mb-2">
        Login Benefits:
      </h3>
      <ul className="text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
        <li>Update your profile and contact information</li>
        <li>Find classmates and colleagues</li>
        <li>Network with other alumni professionals</li>
        <li>Participate in online discussions and forums</li>
        <li>Access exclusive alumni events and discounts</li>
      </ul>
    </div>

    <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
    <p className="text-sm text-gray-600 text-center mb-6">
      Enter your registered email and password to sign in.
    </p>

    <div className="space-y-4">
      <div className="space-y-2">
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
          className="border border-gray-300 rounded-lg p-2.5 w-full"
        />
      </div>
      <div className="relative space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <TextInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2.5 w-full pr-10"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeSlashIcon   
 className="w-5 h-5 text-gray-500" />
          ) : (
            <EyeIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>

    <div className="mt-6 space-y-4">
      <Button className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg" onClick={handleLogin}>
        Login
      </Button>
      <Button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-100"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Sign in with Google
      </Button>
    </div>
  </Card>
</div>
  );
};

export default Login;
