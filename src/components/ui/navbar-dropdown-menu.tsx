'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import type { NavLink } from '@/types/NavLink';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

interface DropdownMenuProps {
  label: string;
  links: NavLink[];
}

const NavDropdownMenu = ({ label, links }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium hover:border-black">
        {label} <ChevronDown className="ml-1 size-4 " />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl p-0 ">
        {links.map((link) => (
          <DropdownMenuItem
            key={link.href}
            className="px-4 py-2 hover:bg-[#D2DFE2]"
          >
            <Link href={link.href} className="w-full ">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
