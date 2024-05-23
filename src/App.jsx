import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/dashboard/Layout";
import Overview from "./pages/dashboard/Overview";
import SignIn from "./pages/auth/SignIn";
import Ticket from "./pages/dashboard/Ticket";
import { checkAuthLoader, checkNotAuthLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Overview /> },
      { path: "/ticket", element: <Ticket /> },
    ],
    loader: checkAuthLoader,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    loader: checkNotAuthLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
