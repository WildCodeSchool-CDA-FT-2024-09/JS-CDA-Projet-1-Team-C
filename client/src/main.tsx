import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Juries from "./pages/Juries.tsx";
import TeamsManagement from "./pages/TeamsManagement.tsx"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
        path: "juries",
        element: <Juries />,
      },
      {
        path: "manage",
        element: <Outlet />,
        children:[
          {
            path: "teams",
            element: <TeamsManagement />,
          },
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={connexion}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
