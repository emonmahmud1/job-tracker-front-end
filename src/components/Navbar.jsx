import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarSlide from "./SidebarSlide";
import useAuth from "../hooks/useAuth";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, meLoading, logout } = useAuth();
  const usersNavLinks = [
    { name: "Home", path: "/user/home" },
    { name: "Applied Jobs", path: "/user/applied-jobs" },
    { name: "Posted Jobs", path: "/user/posted-jobs" },
  ];
  const adminNavLinks = [
    { name: "Home", path: "/admin" },
    { name: "Manage Users", path: "/admin/manage-users" },
    { name: "Posted Jobs", path: "/admin/posted-jobs" },
    { name: "All Applicants", path: "/admin/all-applicants" },
  ];
  const handleLogout = () => {
    logout();
    toast.success("Logged out");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <div className="hidden md:flex justify-between items-center p-4 bg-white text-black shadow-sm sticky top-0 z-50 font-lato">
        <div>
          <NavLink className="font-lora font-bold text-xl">
            Job<span className="text-red-500">Hunt</span>BD
          </NavLink>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {user?.user.role === "admin"
                ? adminNavLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      <NavLink
                        className="text-black font-bold hover:bg-gray-50 p-2 rounded-sm"
                        to={link.path}
                      >
                        {link.name}
                      </NavLink>
                    </NavigationMenuItem>
                  ))
                : usersNavLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      <NavLink
                        className="text-black font-bold hover:bg-gray-50 p-2 rounded-sm"
                        to={link.path}
                      >
                        {link.name}
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="md:hidden flex">
        {meLoading ? (
          <Skeleton className="h-4 w-[150px]" />
        ) : user?.user.role === "admin" ? (
          <SidebarSlide items={adminNavLinks} />
        ) : (
          <SidebarSlide items={usersNavLinks} />
        )}
      </div>
    </>
  );
};

export default Navbar;
