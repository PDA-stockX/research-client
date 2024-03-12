import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "~/layout/DefaultLayout";
import Home from "~/pages/home/Home";
import Login from "~/pages/home/Login";
import Signup from "~/pages/home/Signup";
import NavbarLayout from "~/layout/NavbarLayout";
import AnalystEarning from "~/pages/analyst/EarningRate";
import AnalystAchievement from "~/pages/analyst/AchievementRate";
import AnalystSector from "~/pages/analyst/Sector";
import AnalystPopularity from "~/pages/analyst/Popularity";

const mainRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "",
        element: <NavbarLayout />,
        children: [
          {
            path: "/analyst/earning", // analyst 첫 페이지이자 수익률
            element: <AnalystEarning />,
          },
          {
            path: "/analyst/achievement", // analyst 달성률
            element: <AnalystAchievement />,
          },
          {
            path: "/analyst/sector", // analyst 업종
            element: <AnalystSector />,
          },
          {
            path: "/analyst/popularity", // analyst 인기
            element: <AnalystPopularity />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);
export default router;
