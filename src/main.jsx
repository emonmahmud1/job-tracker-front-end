import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/user/Dashboard";
import UserLayout from "./layout/UserLayout";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import "./index.css";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import AdminLayout from "./layout/AdminLayout";
import PrivateRoute from "./PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthProvider";
import AllJobs from "./pages/user/AllJobs";

const queryClient = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/all-jobs" element={<AllJobs />} />
            </Route>

            <Route
              path="/admin/home"
              element={
                <PrivateRoute allowedRole={["admin"]}>
                  <AdminLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<DashboardAdmin />} />
            </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
