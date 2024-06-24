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
// import { createTheme, ThemeProvider } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  // const location = useLocation();
  const auth = useContext(AuthContext);
  // const state = location.state;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorPage />}
        // location={
        //   location.state?.backgroundLocation
        //     ? location.state.backgroundLocation
        //     : location
        // }
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