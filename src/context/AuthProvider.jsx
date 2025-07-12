import React, { createContext } from "react";
import usePrivateAxios from "../hooks/usePrivateAxios";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const {
    isLoading: meLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await usePrivateAxios.get("/me");
      return response.data;
    },
    enabled: !!token,
  });
  const logout = () => {
    return localStorage.removeItem("token");
  };
  const value = {
    meLoading,
    user,
    refetch,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
