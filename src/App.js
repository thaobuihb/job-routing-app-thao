import React, { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage, { loader as jobLoader } from "./pages/HomePage";
import ErrorPage from "./error-page";
import DetailPageModal from "./components/DetaiPageModal";
import LoginModal from "./components/LoginModal";
import Layout from "./pages/Layout";
import AuthContext from "./auth/AuthContext";
import JLogin from "./pages/Login";
import "./App.css";

export default function App() {
  const auth = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorPage />}
      >
        <Route path="/" element={<HomePage />} loader={jobLoader} />
        <Route path="/:page" element={<HomePage />} loader={jobLoader} />
        <Route path="/login" element={<JLogin />} />
        {auth.user ? (
          <Route
            path="/job/:id"
            element={<DetailPageModal />}
            loader={jobLoader}
          />
        ) : (
          <Route path="/job/:id" element={<LoginModal />} loader={jobLoader} />
        )}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}