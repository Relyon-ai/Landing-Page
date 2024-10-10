import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Logo } from '@/public/assets/logo/logo';
import type { NavLink } from '@/types/NavLink';

import LocaleSwitcher from '../LocaleSwitcher';
import NavDropdownMenu from '../ui/navbar-dropdown-menu';

const Navbar = () => {
  const t = useTranslations('Navbar');

  const solutionsLinks: NavLink[] = [
    { label: 'Security Companies', href: '/solutions/security-companies' },
    { label: 'Rescue and Evacuation', href: '/solutions/evacuation' },
  ];

  const resourcesLinks: NavLink[] = [
    { label: 'Use Cases', href: '/' },
    { label: 'Guides / Tutorials', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Help Center / FAQs', href: '/' },
  ];
  const aboutLinks: NavLink[] = [
    { label: 'Company', href: '/about/company' },
    { label: 'Impact', href: '/about/impact' },
  ];

  return (
    <Section className="px-3 py-6 ">
      <CenteredMenu logo={<Logo />}>
        <li className="flex items-center justify-center">
          <NavDropdownMenu label={t('solutions')} links={solutionsLinks} />
        </li>

        <li className="flex items-center justify-center">
          <Link className="inline-flex items-center px-1 pt-1" href="/individuals">
            {t('individuals')}
          </Link>
        </li>

        <li className="flex items-center justify-center">
          <NavDropdownMenu label={t('resources')} links={resourcesLinks} />
        </li>

        <li className="flex items-center justify-center">
          <NavDropdownMenu label={t('about')} links={aboutLinks} />
        </li>

        <li className="flex items-end justify-center">
          <LocaleSwitcher />
        </li>

        <li>
          <Button size="lg" variant="cta">
            Book Demo
          </Button>
        </li>
      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
