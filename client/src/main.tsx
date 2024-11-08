import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import connexion from "./services/connexion";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Juries from "./pages/Juries.tsx";
import TeamsManagement from "./pages/TeamsManagement.tsx";
import JuriesManagement from "./pages/JuriesManagement.tsx";
import CompetitionsManagement from "./pages/CompetitionsManagement.tsx";
import SessionsManagement from "./pages/SessionsManagement.tsx";
import Evaluation from "./pages/Evaluation.tsx";
import RankingNotFound from "./pages/RankingNotFound.tsx";
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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Juries />,
          },
          {
            path: "evaluation",
            element: <Evaluation />,
          },
        ],
      },
      {
        path: "competition/:competitionId/ranking",
        element: <RankingNotFound />,
      },
      {
        path: "manage",
        element: <Outlet />,
        children: [
          {
            path: "competitions",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <CompetitionsManagement />,
              },
              {
                path: ":competitionId/planning",
                element: <SessionsManagement />,
              },
              {
                path: ":competitionId/teams",
                element: <TeamsManagement />,
              },
              {
                path: ":competitionId/juries",
                element: <JuriesManagement />,
              },
            ],
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
  </StrictMode>
);
