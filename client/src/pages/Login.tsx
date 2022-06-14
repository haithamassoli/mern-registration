import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//@ts-ignore
import { loginUser } from "../redux/user/auth/userAuthSlice";

function Login() {
  const dispatch = useDispatch();
  const { loginError } = useSelector((state: any) => state.userAuth);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUser(user));
    if (!loginError) navigate("/");
    if (loginError) setErrors(loginError);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 xs:w-96 md:w-[500px] [&>input]:mt-4 [&>input]:w-full [&>input]:rounded-lg [&>input]:p-4 [&>input]:shadow-md"
      >
        <h2 className="mb-2 text-center text-sm font-semibold text-red-500">
          {errors}
        </h2>
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <input
          className="block"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          placeholder="Your Email"
        />
        <input
          className="mb-4"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Your Password"
        />
        <p className="cursor-pointer text-gray-400">Forget Password?</p>
        <button
          type="submit"
          className="my-2 block w-full rounded-lg bg-blue-500 px-6 py-3 font-bold text-white"
        >
          Sign In
        </button>
        <Link to={"/signup"}>
          <p className="text-center font-medium">
            Don't have an account?
            <span className="ml-1 font-bold text-blue-500">Sign Up</span>
          </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
