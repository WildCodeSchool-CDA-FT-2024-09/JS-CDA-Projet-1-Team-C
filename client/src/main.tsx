import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Juries from "./pages/Juries.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import JuriesManagement from "./pages/JuriesManagement.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/juries",
        element: <Juries />,
      },
      {
        path: "manage",
        element: <Outlet />,
        children: [
          {
            path: "juries",
            element: <JuriesManagement />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={connexion}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
