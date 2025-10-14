import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Olx from "./components/Olx/Olx";
import Moters from "./components/Moters/Moters";
import Property from "./components/Property/Porperty";
import Login from "./Login";
import Footer from "./components/footer/Footer";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Olx />
        <Footer />
      </>
    ),
  },
  {
    path: "/moters",
    element: (
      <>
        <Navbar />
        <Moters />
        <Footer />
      </>
    ),
  },
  {
    path: "/property",
    element: (
      <>
        <Navbar />
        <Property />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
