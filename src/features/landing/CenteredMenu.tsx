"use client";

import Link from "next/link";

import { cn } from "@/utils/Helpers";
import { useState } from "react";
import MenuIcon from "@/public/assets/icons/menu-icon";
import { Button } from "@/components/ui/button";
import { max } from "drizzle-orm";
import { on } from "events";

const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navClass = cn(
    `mt-2 ${isOpen ? "block" : "hidden"} md:block rounded-t max-lg:w-full max-lg:p-5`
  );
  

  return (
    <div className="flex flex-wrap items-center sm:justify-between">
      <div className="flex justify-between items-center md:block w-full md:w-auto">
        <Link href="/">{props.logo}</Link>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant={"ghost"}
          className="md:hidden"
        >
          <MenuIcon />
        </Button>
      </div>

      <nav className={navClass}>
        <ul className="flex gap-x-6 gap-y-1 text-lg font-medium max-md:flex-col max-md:[&_a]:inline-block max-md:[&_a]:w-full">
          {props.children}
        </ul>
      </nav>
    </div>
  );
};

export { CenteredMenu };