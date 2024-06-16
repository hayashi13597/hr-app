"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuUsers2 } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { RiTeamLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";

const linkSidebar = [
  {
    title: "Employees",
    href: "/",
    icon: <LuUsers2 />,
  },
  {
    title: "Teams",
    href: "/teams",
    icon: <RiTeamLine />,
  },
  {
    title: "Position",
    href: "/position",
    icon: <GiOfficeChair />,
  },
];

const Sidebar = () => {
  const location = usePathname();

  return (
    <div className="w-1/5 h-screen border-r hidden lg:flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex-none h-16 flex items-center justify-center">
          <Image
            src="/img/dym.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="flex-auto border-t p-4 overflow-y-auto">
          <nav>
            {linkSidebar &&
              linkSidebar.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900 transition-all hover:bg-gray-200 hover:text-gray-900 ${
                    location === item.href ? "bg-gray-200" : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
          </nav>
        </div>
      </div>
      <div className="mb-5 px-4">
        <Link
          href="/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:bg-gray-200"
        >
          <MdOutlineLogout />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
