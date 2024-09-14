"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "@mdi/react";
import {
  mdiHomeVariant,
  mdiAccount,
  mdiAccountSupervisor,
  mdiInboxArrowDown,
  mdiDelete,
} from "@mdi/js";

interface NavItemProps {
  iconPath: string;
  label: string;
  href: string;
  isActive: boolean;
}

const NavItem = ({ iconPath, label, href, isActive }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center p-2 pl-8 rounded-lg text-manrope text-bold text-4 ${
          isActive
            ? "bg-gray-200 text-primary"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        <Icon
          path={iconPath}
          size={1}
          className={`mr-2 ${isActive ? "text-primary" : "text-gray-700"}`}
        />
        {label}
      </a>
    </li>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "All projects",
      href: "/",
      iconPath: mdiHomeVariant,
    },
    {
      label: "Your projects",
      href: "/projects",
      iconPath: mdiAccount,
    },
    {
      label: "Shared with you",
      href: "/shared",
      iconPath: mdiAccountSupervisor,
    },
    {
      label: "Archived",
      href: "/archived",
      iconPath: mdiInboxArrowDown,
    },
    {
      label: "Trash",
      href: "/trash",
      iconPath: mdiDelete,
    },
  ];

  return (
    <aside className="flex flex-col w-[330px] h-auto bg-gray-100 pt-[60px] pb-[30px] px-[30px] border-r border-gray-300 min-w-[300px]">
      <div className="flex flex-col flex-grow">
        <a href="/" className="flex flex-row gap-[7px] justify-center">
          <Image src="/aro.png" width={43} height={41} alt="aro-icon" />
          <div className="font-vietnam width-[76px] height-[42px] text-[33.05px] font-bold leading-[41.8px] text-left text-primary">
            ARO
          </div>
        </a>
        <nav className="mt-[40px] flex-grow">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                iconPath={item.iconPath}
                label={item.label}
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </ul>
        </nav>
      </div>
      <button className="font-manrope font-semibold w-full py-2 bg-primary text-white rounded-lg items flex items-center justify-center hover:text-primary hover:bg-white hover:border-primary hover: border-2">
        <span className="mr-2">+</span>
        New
      </button>
    </aside>
  );
};

export default Navbar;
