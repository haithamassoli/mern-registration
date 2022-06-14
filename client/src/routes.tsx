import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NotRequiredAuth, RequiredAuth } from "./utility/Auth.js";
import Loader from "./utility/Loader.js";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
    requiredAuth: true,
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
        {routes.map((route) =>
          route.requiredAuth ? (
            <Route
              path={route.path}
              element={
                // @ts-ignore
                <RequiredAuth>
                  <route.component />
                </RequiredAuth>
              }
              key={route.path}
            />
          ) : route.requiredAuth === false ? (
            <Route
              path={route.path}
              element={
                // @ts-ignore
                <NotRequiredAuth>
                  <route.component />
                </NotRequiredAuth>
              }
              key={route.path}
            />
          ) : (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          )
        )}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
