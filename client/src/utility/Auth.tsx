import { Navigate, useLocation } from "react-router-dom";
interface AuthProps {
  children: React.ReactNode;
}

export function RequiredAuth({ children }: AuthProps) {
  const location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} state={{ path: location.pathname }} />;
  }
  return children;
}

export function NotRequiredAuth({ children }: AuthProps) {
  const location = useLocation();

  if (!localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to={"/"} state={{ path: location.pathname }} />;
  }
}
