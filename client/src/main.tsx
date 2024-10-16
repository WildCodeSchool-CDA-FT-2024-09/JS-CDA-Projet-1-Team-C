import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Juries from "./pages/Juries.tsx";

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
