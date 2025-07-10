import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import usePublicAxios from "../../hooks/usePublicAxios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location?.state?.from?.pathname;
  const { refetch } = useAuth();
  console.log(location?.state?.from?.pathname);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;
    const data = { email, password };

    try {
      const response = await usePublicAxios.post("/user/login", data);
      const role = response?.data.user?.role;
      localStorage.setItem("token", response.data.token);
      await refetch();

    const fromPath = location?.state?.from?.pathname;

    const isAdminRoute = fromPath?.startsWith("/admin");
    const isUserRoute = fromPath?.startsWith("/user");

  
    if (fromPath) {
      if ((role === "admin" && isAdminRoute) || (role === "user" && isUserRoute)) {
        navigate(fromPath, { replace: true });
      } else {
        navigate(role === "admin" ? "/admin/home" : "/user/home", { replace: true });
      }
    } else {
      navigate(role === "admin" ? "/admin/home" : "/user/home", { replace: true });
    }
      toast.success("Successfully logged in!");
    } catch (error) {
      toast.error(`${error.response?.data.message || "Login failed"}`);
    }
  };

  return (
    <div className="bg-[#f2f2fa] min-h-screen px-5 py-2 flex items-center justify-center">
      <Card className="w-full max-w-sm bg-gray-50 shadow-md">
        <CardHeader>
          <CardTitle>
            Login to Job<span>Hunt</span>BD
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
