import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";

export const routes = [

  {
    exact: true,
    path: "/",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/DashdoardHome")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
