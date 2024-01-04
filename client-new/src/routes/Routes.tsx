import React from "react";
import {
  BrowserRouter,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "components/HomePage";
import PersonDetail from "components/PersonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/person",
    element: <PersonDetail />,
  },
  {
    path: "/a",
    element: <div>Hello world!</div>,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
