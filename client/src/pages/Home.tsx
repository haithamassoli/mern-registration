import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { logoutUser } from "../redux/user/auth/userAuthSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <h3
        onClick={handleLogout}
        className="mt-4 cursor-pointer text-xl font-semibold"
      >
        Logout
      </h3>
    </div>
  );
}

export default Home;
