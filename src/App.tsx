import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}