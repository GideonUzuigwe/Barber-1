import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";

//Create Our Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
