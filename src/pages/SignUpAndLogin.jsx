import SignUp from "../components/SignUpAndLogin/SignUp";
import Login from "../components/SignUpAndLogin/Login";

const SignUpAndLogin = () => {
  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="flex items-center justify-center bg-primary p-6 md:p-12">
        <SignUp />
      </div>
      <div className="flex items-center justify-center bg-background p-6 md:p-12">
        <Login />
      </div>
    </div>
  );
};

export default SignUpAndLogin;
