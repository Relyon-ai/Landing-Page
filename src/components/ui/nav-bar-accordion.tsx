import React from "react";
import type { NavLink } from "@/types/NavLink";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

interface AccordionMenuProps {
  label: string;
  links: NavLink[];
}

function NavBarAccordion({ label, links }: AccordionMenuProps) {
  return (
    <Accordion type="single" collapsible className="md:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger>{label}</AccordionTrigger>
        {links.map((link) => (
          <AccordionContent key={uuidv4()} className="w-full">
            <Link href={link.href} className="w-full ">
              {link.label}
            </Link>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}

export default NavBarAccordion;
