import { Card, Label, TextInput, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      console.log(userCred);
      if (userCred) {
        setAuth(true);
        localStorage.setItem("email", userCred.email);
        userCred.getIdTokenResult((tokenID) => {
          console.log(tokenID);
        });
      }
    });

    if (authorized) {
      navigate("/Profile");
    }
  }, [authorized]);

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      if (res) {
        setAuth(true);
      }
      alert("User logged in!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md space-y-6">
      <Card>
        <h1 className="text-3xl text-center font-bold">Sign In</h1>
        <p>Enter your email and password to sign in.</p>

        <div className="space-y-4">
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
          <Button className="w-full bg-primary" onClick={handleLogin}>
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
