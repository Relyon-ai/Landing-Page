import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { CenteredMenu } from "@/features/landing/CenteredMenu";
import { Section } from "@/features/landing/Section";
import { Logo } from "@/public/assets/logo/logo";
import type { NavLink } from "@/types/NavLink";

import LocaleSwitcher from "../LocaleSwitcher";
import NavDropdownMenu from "../ui/navbar-dropdown-menu";
import NavBarAccordion from "../ui/nav-bar-accordion";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const solutionsLinks: NavLink[] = [
    { label: "Security Companies", href: "/solutions/security-companies" },
    { label: "Rescue and Evacuation", href: "/solutions/evacuation" },
  ];

  const resourcesLinks: NavLink[] = [
    { label: "Use Cases", href: "/" },
    { label: "Partners", href: "/resources/partners" },
    { label: "Blog", href: "/" },
    { label: "Help Center / FAQs", href: "/" },
  ];
  const aboutLinks: NavLink[] = [
    { label: "Company", href: "/about/company" },
    { label: "Impact", href: "/about/impact" },
  ];

  return (
    <Section className="md:px-3 py-6 ">
      <CenteredMenu logo={<Logo />}>
        <li className="md:flex md:items-center md:justify-center">
          <NavDropdownMenu label={t("solutions")} links={solutionsLinks} />
          <NavBarAccordion label={t("solutions")} links={solutionsLinks} />
        </li>

        <li className="md:flex md:items-center md:justify-center">
          <Link
            className="md:text-center md:items-center mt-4 md:mt-0 md:px-1 md:pt-1"
            href="/individuals"
          >
            {t("individuals")}
          </Link>
        </li>


        <li className="md:flex md:items-center md:justify-center">
          <NavDropdownMenu label={t("resources")} links={resourcesLinks} />
          <NavBarAccordion label={t("resources")} links={resourcesLinks} />
        </li>

        <li className="md:flex md:items-center md:justify-center">
          <NavDropdownMenu label={t("about")} links={aboutLinks} />
          <NavBarAccordion label={t("about")} links={aboutLinks} />
        </li>

        <li className="md:flex md:items-center md:justify-center">
          <LocaleSwitcher />
        </li>

        <li className="flex justify-center items-center">
          <Button size="lg" variant="cta">
            Book Demo
          </Button>
        </li>
      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
