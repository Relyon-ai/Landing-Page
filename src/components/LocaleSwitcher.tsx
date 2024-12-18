"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import { AppConfig } from "@/utils/AppConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hidden md:flex">
          <Button className="p-2 focus-visible:ring-offset-0" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 size-5 stroke-current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            <span className="ml-0.5 flex text-[16px]">
              {locale.toUpperCase()}
              <div className="flex items-center justify-center">
                <ChevronDown className="ml-1 size-4 " />
              </div>
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-xl p-0 hidden md:block">
          <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
            {AppConfig.locales.map((elt) =>
              elt.id.trim() !== locale.trim() ? (
                <DropdownMenuRadioItem
                  key={elt.id}
                  value={elt.id}
                  className="mx-0 flex items-center justify-center px-0 "
                >
                  {elt.id.toUpperCase()}
                </DropdownMenuRadioItem>
              ) : null
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Accordion type="single" collapsible className="md:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 size-5 stroke-current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            <span className="ml-0.5 flex text-[16px]">
              {locale.toUpperCase()}
              <div className="md:flex items-center justify-center hidden ">
                <ChevronDown className="ml-1 size-4 " />
              </div>
            </span>
          </AccordionTrigger>

          <AccordionContent>
            <ul className="flex flex-col">
              {AppConfig.locales.map((elt) =>
                elt.id.trim() !== locale.trim() ? (
                  <li key={uuidv4()}>
                    <Button
                      onClick={() => handleChange(elt.id)}
                      variant="ghost"
                    >
                      {elt.id.toUpperCase()}
                    </Button>
                  </li>
                ) : null
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
