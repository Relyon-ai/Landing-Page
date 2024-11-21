import Link from 'next/link';

import Instegram from '@/public/assets/icons/instegram-icon';
import LinkedIn from '@/public/assets/icons/linkedIn-icon';
import { WhiteLogo } from '@/public/assets/logo/logo';

const Footer = () => {
  return (
    <footer className="bg-[#1F606C] py-8 text-white w-screen">
      <div className=" mx-auto flex items-center justify-between px-2 lg:px-16">
        <div className="shrink-0 px-4 lg:px-0">
          <WhiteLogo />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col mx-2 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instegram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
