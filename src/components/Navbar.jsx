import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarSlide from "./SidebarSlide";

const Navbar = () => {
  const usersNavLinks = [
    { name: "Home", path: "/user" },
    { name: "Applied Jobs", path: "/user/applied-jobs" },
    { name: "Posted Jobs", path: "/user/posted-jobs" },
  ];
  const adminNavLinks = [
    { name: "Home", path: "/admin" },
    { name: "Manage Users", path: "/admin/manage-users" },
    { name: "Posted Jobs", path: "/admin/posted-jobs" },
    { name: "All Applicants", path: "/admin/all-applicants" },
  ];
  return (
    <>
      <div className="hidden md:flex justify-between items-center p-4 bg-white text-black shadow-sm sticky top-0 z-50 font-lato">
        <div>
          <NavLink className="font-lora font-bold text-xl">
            Work<span className="text-red-500">Hunt</span>BD
          </NavLink>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {usersNavLinks.map((link) => (
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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:hidden flex">
         <SidebarSlide items={usersNavLinks}/>
      </div>
    </>
  );
};

export default Navbar;
