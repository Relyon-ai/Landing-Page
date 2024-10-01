'use client';

import Link from 'next/link';

import { cn } from '@/utils/Helpers';

const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
}) => {
  // Define the class names for navigation without the conditional toggle logic
  const navClass = cn(
    'mt-2 rounded-t max-lg:w-full max-lg:bg-secondary max-lg:p-5',
  );

  return (
    <div className="flex flex-wrap items-center justify-between">
      <Link href="/">{props.logo}</Link>

      <nav className={navClass}>
        <ul className="flex gap-x-6 gap-y-1 text-lg font-medium max-lg:flex-col max-lg:[&_a]:inline-block max-lg:[&_a]:w-full">
          {props.children}
        </ul>
      </nav>

      {/* Right menu rendering, uncomment if needed */}
      {/* <div className="rounded-b border-t border-border">
        <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&_li:not(:last-child):hover]:opacity-100 [&_li:not(:last-child)]:opacity-60">
          {props.rightMenu}
        </ul>
      </div> */}
    </div>
  );
};

export { CenteredMenu };
