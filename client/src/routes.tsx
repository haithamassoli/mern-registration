import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./utility/Loader.js";
const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/login",
    component: lazy(() => import("./pages/Login")),
  },
  {
    path: "/signup",
    component: lazy(() => import("./pages/Signup")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/404")),
  },
];

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
