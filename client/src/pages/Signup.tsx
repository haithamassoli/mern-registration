import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { registerUser } from "../redux/user/auth/userAuthSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerError } = useSelector((state: any) => state.userAuth);

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    name: "",
    terms: false,
    policy: false,
  });
  const [errors, setErrors] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(registerUser({ ...user, confirmPassword: undefined }));
    if (!registerError) {
      navigate("/");
    } else {
      setErrors(registerError);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full p-4 xs:w-96 md:w-[800px]">
        <h2 className="mb-2 text-center text-sm font-semibold text-red-500">
          {errors}
        </h2>
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="my-4 grid-cols-1 gap-4 md:grid md:grid-cols-4 [&>input]:col-span-2 [&>input]:w-full [&>input]:rounded-lg [&>input]:p-4 [&>input]:shadow-md [&>*]:mt-4 md:[&>*]:mt-0"
        >
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="Your Email"
          />
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="Your Password"
          />
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            value={user.confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          <div className="relative col-span-2 col-start-2 flex rounded-lg shadow-md">
            <i className="fa-solid fa-earth-americas fa-lg absolute top-1/2 left-3"></i>
            <div className="w-10 py-3"></div>
            <select
              id="country"
              name="country"
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
              className="mr-2 block w-full cursor-pointer
                      px-2 py-4 text-base text-gray-700 focus:border-blue-600
                      focus:bg-white focus:text-gray-700 focus:outline-none"
            >
              <option className="text-gray-400">Choose Country</option>
              <option value="jordan">Jordan</option>
              <option value="ksa">KSA</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div className="col-span-2">
            <div className="flex items-center">
              <input
                id="terms"
                onChange={(e) => setUser({ ...user, terms: e.target.checked })}
                type="checkbox"
                className="cursor-pointer"
              />
              <label htmlFor="terms" className="ml-1 cursor-pointer">
                I agree to the
                <span className="ml-1 font-bold text-blue-500">
                  terms and conditions
                </span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => setUser({ ...user, policy: e.target.checked })}
                id="policy"
                className="cursor-pointer"
              />
              <label htmlFor="policy" className="ml-1 cursor-pointer">
                I agree to the
                <span className="ml-1 font-bold text-blue-500">
                  privacy policy
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="col-span-2 my-2 block w-full rounded-lg bg-blue-500 px-6 py-3 font-bold text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
