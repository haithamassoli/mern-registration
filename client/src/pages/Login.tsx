import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 xs:w-96 md:w-[500px] [&>input]:mt-4 [&>input]:w-full [&>input]:rounded-lg [&>input]:p-4 [&>input]:shadow-md"
      >
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
