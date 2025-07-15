import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Inbox, Logs } from "lucide-react";
import { CgMenuGridO } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Button } from "@/components/ui/button";

const SidebarSlide = ({ items }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    toast.success("Logged out");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <Sheet>
        <div className="flex justify-between items-center  w-full">
          <div>
            {" "}
            <NavLink className="font-lora font-bold text-xl">
              Job<span className="text-red-500">Hunt</span>BD
            </NavLink>
          </div>
          <div className="">
            <SheetTrigger className="p-2">
              <Logs className="h-6 w-6" />
            </SheetTrigger>
          </div>
        </div>

        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Admin</SheetTitle>
            <SheetDescription>
              Manage your account settings and preferences.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-3 text-center">
            <ul className="space-y-4 border pl-4">
              {items?.map((item) => (
                <li key={item.name} className="flex items-center space-x-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-bold p-2 rounded-sm border-b-2 border-green-600"
                        : "text-black font-bold hover:bg-gray-50 p-2 rounded-sm"
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarSlide;
