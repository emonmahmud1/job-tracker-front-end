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
import { NavLink } from "react-router";

const SidebarSlide = ({ items }) => {
  return (
    <>
      <Sheet>
        <div className="flex justify-between items-center  w-full">
          <div>
            {" "}
            <NavLink className="font-lora font-bold text-xl">
              Work<span className="text-red-500">Hunt</span>BD
            </NavLink>
          </div>
          <div className="">
            <SheetTrigger className="p-2">
              <Logs className="h-6 w-6" />
            </SheetTrigger>
          </div>
        </div>

        <SheetContent side="left" className="w-[400px]">
          <SheetHeader>
            <SheetTitle>Admin</SheetTitle>
            <SheetDescription>
              Manage your account settings and preferences.
            </SheetDescription>
          </SheetHeader>

          <div>
            <ul className="space-y-4 border pl-4">
              {items?.map((item) => (
                <li key={item.title} className="flex items-center space-x-2">
                  <NavLink className="p-2 font-semibold" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarSlide;
