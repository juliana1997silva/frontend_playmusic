import React from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../components/Fallback";
import PrivateRoute from "./PrivateRoute";
import Master from "../layout/Master";

const PageLogin = React.lazy(() => import("../pages/PageLogin"));
const PageDashboard = React.lazy(() => import("../pages/PageDashboard"));
const PageBranch = React.lazy(() => import("../pages/PageBranch"));
const PageCustomers = React.lazy(() => import("../pages/PageCustomers"));
const PageOperator = React.lazy(() => import("../pages/PageOperator"));
const PageUsers = React.lazy(() => import("../pages/PageUsers"));

export function Router() {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<Fallback />}>
            <PageLogin />
          </React.Suspense>
        }
      />
      <Route path="/" element={<Master />}>
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback={<Fallback />}>
              <PrivateRoute>
                <PageDashboard />
              </PrivateRoute>
            </React.Suspense>
          }
        />
        <Route
          path="/branch-create"
          element={
            <React.Suspense fallback={<Fallback />}>
              <PrivateRoute>
                <PageBranch />
              </PrivateRoute>
            </React.Suspense>
          }
        />
        <Route
          path="/customers"
          element={
            <React.Suspense fallback={<Fallback />}>
              <PrivateRoute>
                <PageCustomers />
              </PrivateRoute>
            </React.Suspense>
          }
        />
        <Route
          path="/operator"
          element={
            <React.Suspense fallback={<Fallback />}>
              <PrivateRoute>
                <PageOperator />
              </PrivateRoute>
            </React.Suspense>
          }
        />
        <Route
          path="/users"
          element={
            <React.Suspense fallback={<Fallback />}>
              <PrivateRoute>
                <PageUsers />
              </PrivateRoute>
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
